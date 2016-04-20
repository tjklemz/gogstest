# gogstest

Ensure you have the latest (Stable, not LTS) version of Node.js installed from https://nodejs.org/en/

```
git clone https://github.com/tjklemz/gogstest
cd gogstest
npm install
```

See the comments in `api.js`. You must create an `auth.json` file of the form:
```
{
  "token": "your-gogs-token"
}
```

Once you have that, you can start node by typing `node` or `nodejs` on the command line. Load the module by typing:
```
var api = require('./api')
```
If it loaded properly (no errors), you can then play around with the api. Example:
```
api.createUser({
	username: 'bob',
	password: 'bob',
	full_name: 'Bob Smith'
})
```
