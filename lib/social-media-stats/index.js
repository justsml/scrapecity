import { getValue } from '../helpers.js';
import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers,
} from '../scraper.js';

const parserServices = {
  instagram: getInstagramFollowers,
  twitter: getTwitterFollowers,
  // put new social networks here!
}

/**
getFollowerCount

2 patterns supported:
getFollowerCount(service: string, username: string)
getFollowerCount({service: string, username: string})

@examples
  getFollowerCount('instagram', 'wesbos')
  getFollowerCount({instagram: 'wesbos'})
  getFollowerCount({twitter: 'wesbos'})

@returns {Promise<number>} followerCount
*/
export function getFollowerCount(service, username = getValue(service, 'username')) {
  if (!service) throw new Error(`Service (and User) arguments missing`);
  if (!username) throw new Error(`Username argument is missing`);
  if (!parserServices.service) throw new Error(`Service '${service}' not supported`);
  
  return getHTML(`https://${service}.com/${username}`)
    .then(parserServices[service]);
}
