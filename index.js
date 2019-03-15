import wait from 'waait';
import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers,
} from './lib/scraper';

async function go() {
  const [instagramCount, twCount] = await getFollowerCounts('justsml')  
  console.log(
    `You have ${twCount} twitter followers and ${instagramCount} instagram followers`
  );
}

async function getFollowerCounts(username = 'wesbos') {
  return Promise.all([
    getHTML(`https://instagram.com/${username}`).then(getInstagramFollowers),
    getHTML(`https://twitter.com/${username}`).then(getTwitterFollowers),
  ]);
}

go();
