const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('./public/db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
    // CREATE TABLE database_name.table_name(
    //     column1 datatype PRIMARY KEY(one or more columns),
    //     column2 datatype,
    //     column3 datatype,
    //     .....
    //     columnN datatype
    //  );
});

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});
