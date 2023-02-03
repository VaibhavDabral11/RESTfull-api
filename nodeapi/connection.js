var express = require("express")
var mysql = require("mysql")
var app = express()
app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'youtube'
})

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected !!")
    }
})
