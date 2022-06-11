const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Vegas!JMOMarluna',
        database: 'sleuth'
    },
    console.log('Connected to the sleuth database.')
);


// Default response for any other request (Not Found) - must be listed last
app.use((req, res) => {
    res.status(404).end();
});

//Function that starts Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});