import * as Twitter from 'twitter';
import * as process from 'process';
import {generate} from './generator';

// Get secrets from CI Environment variables
// Make a project on https://developer.twitter.com/
// to get your API Key and Secret, then
// generate an OAuth token key and secret.
//
// You can define these as secrets in your github repo to use them in you CI job.
var client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

var params = { status: generate(), };
client.post('statuses/update', params, function(error, data, resp){
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
