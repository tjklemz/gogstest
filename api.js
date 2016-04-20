var Gogs = require('gogs-client');
var gogsApi = new Gogs('https://git.door43.org/api/v1');

/*

To use this, run "node" on the commandline in this directory.
Then, do:
	var api = require('./api')

You can then play around with the api. For example:
	api.createUser({
		username: 'bob',
		password: 'bob',
		full_name: 'Bob Smith'
	})


You will need an auth.json file in this directory in the form of:

{
	"token": "your-gogs-token"	
}

*/

var auth;

try {
	auth = require('./auth');
} catch (e) {
	throw ("\nError: No auth.json file.\n\nYou must have an auth.json file of the form: \n{\n\t\"token\": \"your-gogs-token\"\n}\n");
}

function log (data) {
    console.log(data);
    return data;
}

function createUser (user) {
    return gogsApi.createUser(user, auth).then(log);
}

function editUser (user) {
    return gogsApi.editUser(user, auth).then(log);
}

module.exports.createUser = createUser;
module.exports.editUser = editUser;
