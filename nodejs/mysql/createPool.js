const mysql = require('mysql');

const pool = mysql.createPool('mysql://root:xxxx@localhost/demo1');

// pool.getConnection((err, connection) => {
//   if (err) throw err;

//   // const sql = 'select * from class101';
//   const sql = 'insert into class101 values (33, "Ali Pay", 4.3)';

//   connection.query(sql, (err, results, fields) => {
//     // console.log(results);
//     // console.log('\n');
//     // console.log(fields);
//     console.log('1 record inserted');
//     connection.release();
//     if (err) throw err;

//     connection.destroy();
//   });
// });

pool.on('connection', con => {
  // const sql = 'select * from class101';
  const sql = 'insert into class101 values (33, "Ali Pay", 4.3)';

  con.query(sql);
});
