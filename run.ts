import * as Twitter from 'twitter';
import * as process from 'process';
import {generate} from './genres';
var client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  // bearer_token: process.env.BEARER_TOKEN,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

var params = { status: generate(), };
client.post('statuses/update', params, function(error, data, resp){
  if (error) {
    console.error(error);
  } else {
    console.log(data?.entities?.urls[0]?.expanded_url);
  }
});
