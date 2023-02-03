// import statement in normal nodejs :-
//****** */
//const { PrismaClient } = require("@prisma/client")
//const { express } = express;
//var express = require("express")
//const { json } = require("stream/consumers");
//var mysql = require("mysql");
//********* */
// import statement in es6 module include nodejs :-
//***** */
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// import express from 'express';
// import mysql from 'mysql'
// import { json } from 'stream/consumers'
//********* */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import express from 'express';
import mysql from 'mysql'
import { json } from 'stream/consumers'
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
        console.log("The databased is conneected to this website. The wesite is live on localhost . This app have for operation of restfull  api like create, delete , update  and read . This app also have other feature like (create , createall , update , updateall , read one ,read all , delete one , deleteall ).");
        console.log("");
    }
})

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
});
// restfull api for reading the data of one customer.
app.get("/users", async(req, res) => {
    const users = await prisma.youtube_channels.findMany();
    res.json(users)
    console.log(users);
});
// restfull api for reading the data of many customer.
app.get("/oneuser", async(req, res) => {
    var specificuser = await prisma.youtube_channels.findMany({
        where: {
            subscribers: {
                gt: 517
            }

        }
    });
    console.log(specificuser);
    res.json(specificuser);
});

// api for post (rest full api (no input ) for one)
app.post("/autocreate", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { name, description, subscribers, link } = req.body;
    const result = await prisma.youtube_channels.create({
        data: {
            name,
            description,
            subscribers,
            link,
        },
    });
    res.json(result);
});

// api for post (rest full api (no input ) for many)
app.get("/createmany", async(req, res) => {
    const many = await prisma.youtube_channels.createMany({
        data: [{
            name: "Rohit Gupta",
            description: "software development things",
            subscribers: 5000,
            link: 'https://www.youtube.com/c/codewithrohit'
        }, {
            name: "komal Gupta",
            description: "software development things",
            subscribers: 10000,
            link: 'https://www.youtube.com/c/codewithkomal'

        }],
    });
    res.json(many);
    console.log(many);
});

// api for update data from table (rest full api (no input ) for many)
app.get("/updateone", async(req, res) => {
    const one = await prisma.youtube_channels.update({
        where: {
            id: 27
        },
        data: {
            link: 'https://www.youtube.com/c/codewithneha',
            subscribers: 20000
        },
    });
    res.json(one);
    console.log(one);
});
// api for update data from table (rest full api (no input ) for many)
app.put("/update", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { id, name, description, subscribers, link } = req.body;
    const up = await prisma.youtube_channels.update({
        where: {
            id
        },
        data: {
            name,
            description,
            subscribers,
            link,
        },
    });
    res.json(up);
    console.log(up);
});

app.delete("/deleteone", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { id } = req.body;
    const delet = await prisma.youtube_channels.delete({
        where: {
            id,
        },
    });
    res.json(delet);
    console.log(delet);
});
app.get("/deleteout", async(req, res) => {
    const delet = await prisma.youtube_channels.delete({
        where: {
            id: 5,
        },
    });
    res.json(delet);
    console.log(delet);
});


// api for post (rest full api ( input ) for one)
app.post("/autocreateall", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { name, description, subscribers, link } = req.body;
    const create = await prisma.youtube_channels.createMany({
        data: {
            name,
            description,
            subscribers,
            link,
        },
    });
    res.json(create);
});
//localhost live port
app.listen(3000, () => {
    console.log("th eserver is live in the backend .");
});
