const rmdir = require('rimraf')
const async = require('async')
const cfg = require('../config')

class CleanMock {
  clean () {
    async.each(cfg.SERVICES, (service, callback) => {
      CleanMock._cleanMock(service, callback)
    }, (err) => {
      if (!err) console.log('Delete All Mock!')
      else console.log('Delete Failed!')
    })
  }

  /**
   * handle mock clean
   * @param service
   * @param callback
   * @private
   */
  static _cleanMock (service, callback) {
    let path = `${cfg.PATH}/${CleanMock._parseName(service.name)}`
    rmdir(path, (err) => {
      if (err) callback(err)
      else console.log('Delete ' + service.name)
      callback()
    })
  }

  /**
   * parse delete name
   * @param name
   * @returns {*}
   * @private
   */
  static _parseName (name) {
    let multi = name.indexOf('/')
    if (multi > -1) {
      name = name.substring(0, multi)
    }
    return name
  }
}

module.exports = CleanMock
