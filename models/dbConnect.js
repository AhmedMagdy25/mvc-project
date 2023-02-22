const mongoose = require("mongoose");
const MONGODB_URL = require("../secrets/.env").MONGODB_URL

module.exports = cb=>{
        return new Promise(async (resolve, reject)=>{
                await mongoose.connect(MONGODB_URL)
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
