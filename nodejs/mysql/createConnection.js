const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'xxxx',
//   database: 'demo1'
// });

const connection = mysql.createConnection('mysql://root:xxxx@localhost/demo1');

connection.connect(err => {
  if (err) throw err;

  // const sql = 'select * from class101';

  connection.query('SELECT * FROM class101', (err, result, fields) => {
    if (err) throw err;
    console.log(result[0].name);
    console.log('\n');
    console.log(fields[0].length);
  });
});

// connection.end(err => {
//   if (err) throw err;
// });
