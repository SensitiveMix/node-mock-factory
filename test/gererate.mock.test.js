const expect = require('expect')
const MockServer = require('../src/lib/MockServer')

describe('Test Generate Mock', () => {
  it('should resolve requests with valid Generate', function (done) {
    let mockTest = new Promise((resolve, reject) => {
      let mock = new MockServer()
      mock.serve()
      resolve(true)
    })
    mockTest
            .then(() => {
              setTimeout(() => {
                done()
              }, 1000)
            })
  })
})
