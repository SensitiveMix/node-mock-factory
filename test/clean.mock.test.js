const expect = require('expect')
const CleanServer = require('../src/lib/CleanMock')

describe('Test Clean Mock', () => {
  it('should resolve requests with Clean', function (done) {
    let mockTest = new Promise((resolve, reject) => {
      let mock = new CleanServer()
      mock.clean()
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
