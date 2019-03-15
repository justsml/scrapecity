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

go();


// Suggested other files in progress & annoted below:

// ./lib/social-media-stats/index.js
const parserServices = {
  instagram: getInstagramFollowers,
  twitter: getTwitterFollowers,
  // put new social networks here!
}

const getValue = (obj, key) => typeof obj === 'object' && obj[key] ? obj[key] : '';

/**
2 formats supported:

@examples

  getFollowerCount('instagram', 'wesbos')
  getFollowerCount({instagram: 'wesbos'})
  getFollowerCount({twitter: 'wesbos'})

@returns {number} followerCount
*/
function getFollowerCount(service, username = getValue(service, 'username')) {
  if (!service) throw new Error(`Service (and User) arguments missing`);
  if (!username) throw new Error(`Username argument is missing`);
  if (!parserServices.service) throw new Error(`Service '${service}' not supported`);
  
  return getHTML(`https://${service}.com/${username}`)
    .then(parserServices[service]);
}

