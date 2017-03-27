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
git clone git@code.teambition.com:tools/mock_server.git
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
  
### POST ACTION 

* request

```javascript
curl -X POST -D { hello:'world' } -H "<prefix>/api/v1/login"
```

* config

```bash
{
    "name": "api/v1/login",
    "Handlers": [
        {
            "method": "POST--Hello=World",
            "resHeader": "HTTP/1.1 200 OK",
            "resContent": "{ succeed: true,msg: ok }"
        }
    ]
}
```

* response

`http status` 200
```javascript
{
    succeed: true,
    msg: ok
}
```

### GET ACTION 

* request

```javascript
curl -X GET -H "<prefix>/api/v1/login?hello=world"
```

* config

```bash
{
    "name": "api/v1/login",
    "Handlers": [
        {
            "method": "GET--Hello=World",
            "resHeader": "HTTP/1.1 200 OK",
            "resContent": "{ succeed: true,msg: ok }"
        }
    ]
}
```

* response

`http status` 200
```javascript
{
    succeed: true,
    msg: ok
}
```

## Deployment
```javascript
sneaky d dev
```


## LICENSE
MIT License

Copyright (c) 2017 Jack Sun
