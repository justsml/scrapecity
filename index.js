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

function getFollowerCounts() {
  return Promise.all([
    getHTML(`https://instagram.com/wesbos`).then(getInstagramFollowers),
    getHTML(`https://twitter.com/wesbos`).then(getTwitterFollowers),
  ]);
}

go();
