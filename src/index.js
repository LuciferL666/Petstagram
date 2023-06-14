const express = require('express');// 3. A
const handlebars = require('express-handlebars');// 6. A

const routes = require('./routes') // 3 D

const app = express(); // 3. A

app.engine('hbs', handlebars.engine({ // 6. A
    extname: 'hbs'  //6. B
}));
app.set('view engine', 'hbs'); //6. B
app.set('views', 'src/views'); //6. C

app.use(express.static('public')) //B
app.use(express.urlencoded({extended: false})) //C ?


app.use(routes)// 3. A

app.listen(3000, console.log(`Server is listening on port 3000...`));// 3. A