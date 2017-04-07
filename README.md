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

3. Set github login auth key in `/src/common/config/db.js`.

    Github redirect uri will like `xxx.com/api/user?_method=post&type=github`.

```
// step1:
https://github.com/settings/applications/new

// step2: 
Application name: harpers
Homepage URL: http://localhost
Authorization callback URL: http://localhost/api/user?_method=post&type=github

// step3:
fill Client ID and Client Secret in `/src/common/config/config.js`.
```

4. Run `npm start`, open `http://127.0.0.1:9000/`

## API Documentation

Open `xxx.com/doc/index.html`, like `127.0.0.1:8360/doc/index.html`

## Contribution

## License