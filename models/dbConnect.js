const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

module.exports = cb=>{
        return new Promise(async (resolve, reject)=>{
                await mongoose.connect(DB_URL)
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
