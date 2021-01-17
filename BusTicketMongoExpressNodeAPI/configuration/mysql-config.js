var mysql = require('mysql')

var con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'abhi',
        database: 'students'

    }

)


module.exports = con;