const http = require('http')
const mockServer = require('mockserver')
const mkdirp = require('mkdirp')
const touch = require('touch')
const fs = require('fs')
const async = require('async')
const cfg = require('../../phoenix-conf-store/mock')

class MockServer {

    serve() {
        async.each(cfg.SERVICES, (service, callback) => {
            this._processMkdir(service, callback)
        }, (err) => {
            MockServer._processResponse(err)
        })
    }

    _processMkdir(service, callback) {
        mkdirp(`${cfg.PATH}/${service.name}`, (err) => {
            if (err) console.error(err)
            MockServer._processWriteMock(service, callback)
        })
    }


    static _processWriteMock(service, callback) {
        async.each(service.Handlers, (handle, handleBack) => {
            MockServer._processWriteMockContent(service, handle, handleBack)
        }, (err) => {
            if (err) callback(err)
            callback()
        })
    }


    /**
     * handle feedback response
     * @param err
     * @private
     */
    static _processResponse(err) {
        if (err) return console.log('Service Init Fail')
        let server = http.createServer(mockServer(cfg.PATH)).listen(cfg.PORT)
        console.log('All Service Init Success')
        process.on('SIGINT', function () {
            console.log("shutting down...")
            server.close(() => {
                console.log("shut down!")
                process.exit()
            })
        })
    }

    /**
     * handle write mock
     * @param service
     * @param handle
     * @param handleBack
     * @private
     */
    static _processWriteMockContent(service, handle, handleBack) {
        let path = `./${cfg.PATH}/${service.name }/${handle.method}.mock`
        touch(path, cb => {
            fs.writeFile(path, handle.resHeader, (err) => {
                if (err) handleBack(err)
                fs.appendFile(path, `\r\n\n${handle.resContent}`, 'utf8', err => {
                    if (err) handleBack(err)
                    console.log(`${service.name } ${handle.method} mock success`)
                    handleBack()
                })
            })
        })
    }
}


module.exports = MockServer
