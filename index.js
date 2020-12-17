const express = require('express');
const morgan = require('morgan');
const apiRouter= require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')

//Instamcia de express en mi app
const app = express();
app.use(cors())

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//primera ruta
app.use('/api', apiRouter);

// Esto se puede acer de dos maneras:
// ====> directo:
// app.listen(3000, () => {
//     console.log('server up');
// })

// ====> o seteando una variable llamada PORT:
app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), () => {
    console.log('server up');
})