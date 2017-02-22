'use strict'

let TT_CLK = 'qNxQcAPI1u2xgWyNoKLYOJWxAmsiEYDP';
let TT_SEC = 'erklu3CYNazmboqm';
let CBURL   = 'https://nufiddle.herokuapp.com/oauth2/callback';
let RSPTYPE = 'code';
let APIURL = 'https://api.tomtom.com/mysports/oauth2/authorize?Api-Key='+OA_APK+'&client_id='+OA_CLK+'&redirect_uri='+CBURL+'&response_type='+RSPTYPE+'&state=NFC21'

var request = require('request');

request(APIURL,function (error, response, body) {

  console.log('url '+APIURL);
  console.log('error ',error);
  console.log('response ',response.status);
  console.log('body ',body);

})
