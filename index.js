
require('dotenv').config()

const express = require("express");
const app = express();


const port = process.env.PORT || 3000
app.use(express.json());
let teaData = []
let id = 1

app.post('/teas', (req, res) => {
    const {name, price} = req.body;
    const newTea = {id : id++, name, price};
    teaData.push(newTea);
    res.status(200).send(newTea);
})

// get all teas
app.get('/teas', (req, res) => {
    res.status(200).send(teaData)
})

// get a tea
app.get('/teas/:id', (req, res) => {
    const find = teaData.find(t => t.id === parseInt(req.params.id));
    if(find){
        res.status(200).send(find)
    }
    else{
        res.status(404).send('404 not found')
    }
})

app.put('/teas/:id', (req, res) => {
    const find = teaData.find(t => t.id === parseInt(req.params.id));
    if(find){

        const {name, price} = req.body
        find.name = name;
        find,price = price;

        res.status(200).send(find)
    }
    else{
        res.status(404).send('404 not found')
    }
})




app.listen(3000, function(){
    console.log(`Server started at pot ${port}`)
})