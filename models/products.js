const mongoose = require('mongoose');
const dbConnect = require('./dbConnect')

const pSchema = new mongoose.Schema({
    name: String,
    type:String,
    details: String,
    img: String,
    rate: Number,
    price:Number
})

const productsModel = new mongoose.model('product',pSchema);

module.exports = {
    getProducts : ()=>{
        try{
            return dbConnect(async()=>{
                return await productsModel.find({})
            })
        }catch(err){
            throw err
        }
    },
    getProductById: id=>{
        try{
            return dbConnect(async ()=>{
                return await productsModel.findById(id)
            })
        }catch(err){
            throw err
        }
    }
}