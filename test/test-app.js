'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('babel-plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        name: 'do-something-really-awesome',
        description: 'A plugin that does a really cool thing',
        githubUsername: 'my-username',
        authorName: 'Oswald ThatEndsWald',
        authorEmail: 'oswald@thatendswald.com',
        keywords: 'foo, bar'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'package.json',
      'README.md',
      'src/index.js',
      'test/index.js'
    ]);
  });
});
