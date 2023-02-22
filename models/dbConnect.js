const mongoose = require("mongoose");

module.exports = cb=>{
        return new Promise(async (resolve, reject)=>{
                await mongoose.connect(process.env.MONGODB_URI)
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
