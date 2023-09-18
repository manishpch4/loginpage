const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'test',
	user : 'root',
	password : 'Admin@123'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;