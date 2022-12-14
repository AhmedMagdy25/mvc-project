const express = require('express')
const app = express();
const {getHomePage, getProductPage, returnProducts, returnProduct}= require('./controller/root');
const port = process.env.PORT || 3000;

app.use(express.static('./public'))
app.use(express.static('./images'))

app.get('/',getHomePage)

app.get('/product/:id',getProductPage)

app.get('/getProducts',returnProducts)

app.get('/getProduct/:id',returnProduct)

app.all('*',(req,res)=>{res.status(404).send('<h1 style="color:red;text-align:center">Page not found !</h1>')})

app.listen(port,(err)=>{
    err? console.log(err): console.log('server running on port '+port)
})