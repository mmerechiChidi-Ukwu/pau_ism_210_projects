const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// app.get("/hello-api", (req, res) => {
//     res.send("Hello, world! Here is an introduction to JavaScript backend programming.")
// });

// app.get("/hello-api-json", (req, res) => {
//     res.send({greeting: "A hello world from the backend!"})
// });

// app.listen(PORT, () => {
//     console.log(`Hello world: server is running on Port ${PORT}.`);
// })

const errorMsg = {}
const status = {}
app.use(express.urlencoded({extended: true}));
app.get("/api/server/status", async(req, res) => {
    const body = req.body;
    console.log(`Received form data:\n${body}`);
    status = {
        statusCode: 201,
        msg: "Cat form submission successful!",
        data: body
    }
    res.status(201).json(status);
});
app.post("/api/submit-form/login", async(req, res) =>{
    const responseBody = {
        status: 200,
        msg: "Login successful!"
    }
    res.status(200).json(responseBody);
})

async function meow(kittenName){
    await mongoose.connect("mongodb+srv://memecu440_db_user:Sample-dample@ism-project.wyrfril.mongodb.net/?appName=ISM-project");
    const kittySchema = new mongoose.Schema({name:String})
    const kitty1 = new kitten({name: kittenName})
    const kitten = new mongoose.model('Kitten', kittySchema)
    kitty1.save()
    console.log(kitty1.name)
}

app.listen(PORT, () => {
    console.log(`Hello world: server is running on Port ${PORT}.`);
    meow()
})

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
    return response.json();
}
postData("http://localhost:3000/api/submit-form/login",
    {username: "AfamO", password: "mew!£qwe12"}).then((data) => {
        console.log(data);
    });