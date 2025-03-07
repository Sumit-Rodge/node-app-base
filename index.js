const { default: axios } = require('axios');
const express = require('express');


const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    console.log("Base URL");
    res.status(200).send({messsage:"UP and Runnig"})
})

app.get('/add',(req,res) => {
    console.log("Base UR addL");
    res.status(200).send({messsage:"ADD URL"})
})


app.listen(3000,()=>{
    console.log(`running on localhost:3000`)
})