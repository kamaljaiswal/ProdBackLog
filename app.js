const express = require('express');
var app = express();
var productController = require('./controllers/productController');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

productController(app);

app.listen(3000);
console.log('Server listening on 3000');
