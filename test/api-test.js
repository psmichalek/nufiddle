'use strict'

const request = require('supertest')
const exp = require('chai').expect;
const appApiUrl = 'https://askmee.herokuapp.com';
const appApiOauthPath = '/oauth2/nufiddle/callback';

describe('Connecting to the APIs ', () => {

    it('should respond with status 200 to oAuth service call ', (done) => {
        request(appApiUrl)
        .get(appApiOauthPath)
        .expect(200,done)
    })

    // add more..
})
