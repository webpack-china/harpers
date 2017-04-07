## Harpers

## Installation

1. Import database by `.sql` file in `/db`.

2. Update database configuration in `/src/common/config/db.js`.

```
// step1: 
mysql -u root -p 

// step2: 
create database harpers;

// step3:
exit;

// step4:
cd db
mysql -uroot -p harpers < harpers_2017-02-09.sql

```

3. Set github login auth key in `/src/common/env/development.js`.

    Github redirect uri will like `xxx.com/api/user?_method=post&type=github`.

```
// step1:
https://github.com/settings/applications/new

// step2: 
Application name: harpers
Homepage URL: http://localhost
Authorization callback URL: http://local.webpack-china.org/api/user?_method=post&type=github

// step3:
fill Client ID and Client Secret and redirect_uri (Authorization callback URL) in `/src/common/env/development.js`.

// step4: 
use Charles or Nginx to set a proxy
local.webpack-china.org 127.0.0.1:9000
```

4. Run `npm start`, open `http://local.webpack-china.org/`

5. Visit `http://local.webpack-china.org/api/user?_method=post&type=github` to login

## API Documentation

Open `xxx.com/doc/index.html`, like `127.0.0.1:8360/doc/index.html`

## Contribution

## License