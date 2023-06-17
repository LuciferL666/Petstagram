const express = require('express');// 3. A
const handlebars = require('express-handlebars'); // 6. A
const path = require('path'); // 6. F
const mongoose = require('mongoose'); //8. A
const cookieParser = require('cookie-parser');  //18. A

const { auth } = require('./middlewares/authMiddleware') //20. B
const routes = require('./routes') // 3. D

const app = express(); // 3. A

//TODO CHANGE DB NAME
mongoose.connect(`mongodb://localhost:27017/Petstagram`) //8. A
.then(() => console.log('DB connected successfully')) //8. A
.catch(err => console.log('DB Error, ', err.message)); //8. A


app.engine('hbs', handlebars.engine({ // 6. A
    extname: 'hbs'  //6. B
}));
app.set('view engine', 'hbs'); //6. B
app.set('views', 'src/views'); //6. C


app.use(express.static(path.resolve(__dirname, 'public'))) //3. B
app.use(express.urlencoded({extended: false})) // 3. C ?
app.use(cookieParser());  //18. A
app.use(auth) // 20
app.use(routes)// 3. D

app.listen(3000, console.log(`Server is listening on port 3000...`));// 3. A