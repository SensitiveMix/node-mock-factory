'use strict'
/* global sneaky */
function TaskCommonConfig () {
  this.user = 'builder'
  this.host = '116.62.16.16'
  this.port = 11122

  this.filter = [
    '+ api**',
    '+ assets**',
    '+ config**',
    '+ pm2**',
    '+ secrets**',
    '+ tasks**',
    '+ views**',
    '+ app.js',
    '+ .sailsrc',
    '+ Gruntfile.js',
    '+ package.json',
    '- **'
  ].join('\n')

  this.overwrite = true
  this.nochdir = true
}

sneaky('dev', function () {
  this.description = 'Deploy to dev-21 environment'
  this.path = '/teambition/server/node4/teambition-tool-mock'

  this.user = 'node4'
  this.host = '192.168.0.21'
  this.port = 22

  this.filter = [
    '+ config**',
    '+ pm2**',
    '+ secrets**',
    '+ src**',
    '+ test**',
    '+ package.json',
    '- **'
  ].join('\n')

  this.after([
    'npm i --development',
    // 'pm2 delete teambition-tool-mock',
    'pm2 start pm2/21.json'
  ].join(' && '))

  this.overwrite = true
  this.nochdir = true
})
