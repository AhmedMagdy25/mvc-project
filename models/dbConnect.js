const mongoose = require("mongoose");

module.exports = cb=>{
        return new Promise(async (resolve, reject)=>{
                await mongoose.connect('mongodb+srv://AhmedMagdy:IHizPZuvhAYh2yIu@cluster0.kbcoecs.mongodb.net/?retryWrites=true&w=majority')
                .then(()=>{
                        return cb()
                        .then((resalt)=>{
                                resolve(resalt)
                        }).catch(err=>{
                                console.error(err);
                                reject()
                        })
                })
                .catch(err=>{
                        console.error(err)
                        reject()
                })
                mongoose.disconnect();
        })
}