```bash
             __                           _                                              __  
    ____    / /_   ____   ___    ____    (_)   _  __          ____ ___   ____   _____   / /__
   / __ \  / __ \ / __ \ / _ \  / __ \  / /   | |/_/ ______  / __ `__ \ / __ \ / ___/  / //_/
  / /_/ / / / / // /_/ //  __/ / / / / / /   _>  <  /_____/ / / / / / // /_/ // /__   / ,<   
 / .___/ /_/ /_/ \____/ \___/ /_/ /_/ /_/   /_/|_|         /_/ /_/ /_/ \____/ \___/  /_/|_|  
/_/                                                                                          
```
[![CircleCI](https://circleci.com/gh/BTCChina/phoenix-kyc-service/tree/jack-dev.svg?style=shield&circle-token=1df8b30b1ebc76cf3fa27ac09ed65a21dc9a52d2)](https://circleci.com/gh/BTCChina/phoenix-kyc-service/tree/jack-dev)
[![Coverage Status](https://coveralls.io/repos/github/BTCChina/phoenix-kyc-service/badge.svg?branch=jack-dev&t=gfYVZa)](https://coveralls.io/github/BTCChina/phoenix-kyc-service?branch=jack-dev)

light weight mock factory  for taking advantage of the built-in phoenix mock service in node v6.8.0.Focus on Automatic Generation.


### Contains Mock Server
- [x] [apn](http://172.20.10.160:9001/apn)
- [x] [kyc](http://172.20.10.160:9001/kyc)
- [x] [sms](http://172.20.10.160:9001/sms)
- [x] [mail](http://172.20.10.160:9001/mail)
- [x] [sitemsg](http://172.20.10.160:9001/sitemsg)
- [x] [uploadphoto](http://172.20.10.160:9001/photo/upload)
- [x] [authorization](http://172.20.10.160:9001/authorization)
- [x] [3rd Party Verify](http://172.20.10.160:9001/tpv)

## Installation
```bash
git clone git@github.com:BTCChina/phoenix-kyc-service.git
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
    'PATH':'./test/mocks',
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
        }
      ]
    }
    ]
}
```

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
