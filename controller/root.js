const {getProducts, getProductById} = require('../models/products');
const path = require('path')
const getHomePage = (req, res)=>{
    res.sendFile(path.resolve(__dirname,"..","views","index.html"))
}

const getProductPage = (req, res)=>{
    res.sendFile(path.resolve(__dirname,"..","views","product.html"))
}

const returnProducts = (req, res)=>{
    getProducts().then(products=>{
        res.json(JSON.stringify(products))
    }).catch(()=>{res.status(500).send("error")});
}

const returnProduct = (req, res) =>{
    const id = req.params.id;
    getProductById(id).then( product=>{
        res.json(JSON.stringify(product))
    }).catch(err=>{console.log(err);res.status(500).send("error").end()})
}

module.exports={
    getHomePage, 
    getProductPage, 
    returnProducts,  
    returnProduct
};