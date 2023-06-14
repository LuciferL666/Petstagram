// 3. A
const express = require('express');

const routes = require('./routes') // 3 D

const app = express();

app.use(express.static('public')) //B
app.use(express.urlencoded({extended: false})) //C ?


app.use(routes)

app.listen(3000, console.log(`Server is listening on port 3000...`));