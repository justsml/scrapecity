import wait from 'waait';
import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers,
} from './lib/scraper';

async function go() {
  const followerCounts = [
    getHTML('https://instagram.com/wesbos').then(getInstagramFollowers),
    getHTML('https://twitter.com/wesbos').then(getTwitterFollowers),
  ];
  
  const [instagramCount, twCount] = await Promise.all(followerCounts);

  console.log(
    `You have ${twCount} twitter followers and ${instagramCount} instagram followers`
  );
}

go();
