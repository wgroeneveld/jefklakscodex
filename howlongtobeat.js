const hltb = require('howlongtobeat')
const hltbService = new hltb.HowLongToBeatService()

const fs = require('fs').promises;
const { resolve } = require('path');

const {promisify} = require('util');
const frontMatterParser = require('parser-front-matter');

const parse = promisify(frontMatterParser.parse.bind(frontMatterParser));

// see brainbaking stuff
async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

// see brainbaking stuff
async function loadPostsWithFrontMatter(postsDirectoryPath) {
  const postNames = await getFiles(postsDirectoryPath);
  const posts = await Promise.all(
    // could be .DS_Store stuff found using recursive function above... 
    postNames.filter(name => name.endsWith('.md')).map(async fileName => {
      const fileContent = await fs.readFile(fileName, 'utf8');
      const {content, data} = await parse(fileContent);
      return {
        game: data.game_name,
        howlongtobeat_id: data.howlongtobeat_id,
        file: fileName
      }
    })
  );
  return posts;
}

async function fillInHowLongToBeat(posts) {
  for(post of posts) {
    const results = await hltbService.search(post.game)

    if(results.length > 0) {
      post.howlongtobeat = results[0].gameplayMain
      post.howlongtobeat_id = results[0].id
    }      
  }
}

async function run() {
  console.log("-- SCANNING not yet processed articles for game_name --")
  let posts = await loadPostsWithFrontMatter(`${__dirname}/content/articles/`)
  posts = posts.filter(post => post.game && !post.howlongtobeat_id)
  await fillInHowLongToBeat(posts)

  for(post of posts) {
    let data = await fs.readFile(post.file, 'utf8')
    data = data.replace(/game_name:/, `howlongtobeat_id: ${post.howlongtobeat_id}\nhowlongtobeat_hrs: ${post.howlongtobeat}\ngame_name:`)
    console.log(`Found game ${post.game}, how long filling in: ${post.howlongtobeat} (id #${post.howlongtobeat_id})`)
    await fs.writeFile(post.file, data, 'utf8')
  }

  console.log("-- DONE modifying files --")
}

run()

/*
async function d() {
  const x = await hltbService.search('dungeon siege')
  console.log(x)
}
*/
