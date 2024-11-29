const express = require('express');
const app = express();
const mssql = require("mssql");

app.get('/', function (req, res) {

    const config = {
        user: 'car',
        password: 'Your_Password', 
        server: 'localhost', 
        database: 'car_database' 
    };


    mssql.connect(config, function (err) {

        if (err) {
            console.error('Database connection failed:', err);
            res.status(500).send('Database connection failed');
            return;
        }

        let request = new mssql.Request();

        request.query('SELECT * FROM cars', function (err, records) {

            if (err) {
                console.error('Query failed:', err);
                res.status(500).send('Query failed');
                return;
            }

            res.json(records.recordset);

        });
    });
});

let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});
