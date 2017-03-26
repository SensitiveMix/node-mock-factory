```bash
                              __             ____                  __
   ____ ___   ____   _____   / /__          / __/  ____ _  _____  / /_  ____    _____   __  __
  / __ `__ \ / __ \ / ___/  / //_/ ______  / /_   / __ `/ / ___/ / __/ / __ \  / ___/  / / / /
 / / / / / // /_/ // /__   / ,<   /_____/ / __/  / /_/ / / /__  / /_  / /_/ / / /     / /_/ /
/_/ /_/ /_/ \____/ \___/  /_/|_|         /_/     \__,_/  \___/  \__/  \____/ /_/      \__, /
                                                                                     /____/
```
[![CircleCI](https://circleci.com/gh/SensitiveMix/node-mock-factory/tree/master.svg?style=shield&circle-token=18fe4ac495f7430045c2f9e57f33acd7b866023a)](https://circleci.com/gh/SensitiveMix/node-mock-factory/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/BTCChina/phoenix-kyc-service/badge.svg?branch=jack-dev&t=gfYVZa)](https://coveralls.io/github/BTCChina/phoenix-kyc-service?branch=jack-dev)


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

light weight mock factory  for taking advantage of the built-in phoenix mock service in node v6.8.0.Focus on Automatic Generation.


## Installation
```bash
git clone git@github.com:SensitiveMix/node-mock-factory.git
```


## Install dependencies:
```bash
npm install
```

## Usage
Initialize phoenix mock plugin with mock cfg, with the given options.

 Options:
  - `npm run mock`  Generate Mock Server
  - `npm run clean` Clean Mock Server


## Template Config
```bash
{
    'PATH':'./src/mocks',
    'PORT':'9001',
    "SERVICES":[
    {
      "name": "authorization",
      "Handlers": [
        {
          "method": "GET",
          "resHeader": "HTTP/1.1 200 OK",
          "resContent": "{ succeed: true,msg: ok }"
        },
        {
          "method": "POST",
          "resHeader": "HTTP/1.1 200 OK",
          "resContent": "{ succeed: true,msg: ok }"
        },
        {
          "method": "GET--a=b.mock",
          "resHeader": "HTTP/1.1 200 OK",
          "resContent": "{ succeed: true,msg: ok }"
        }
      ]
    }
    ]
}
```

Options:
  - `method`  Request Method
  - `GET--a=b.mock` Request GET /hello?a=b
  - `resHeader`  Response Header
  - `resContent` Response Content


## Reference

[mock-server](https://github.com/namshi/mockserver)

## LICENSE
MIT License

Copyright (c) 2016 Jack Sun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
