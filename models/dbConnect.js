const mongoose = require("mongoose");

module.exports = cb=>{
        return new Promise(async (resolve, reject)=>{
                await mongoose.connect('mongodb+srv://AhmedMagdy:WcGeei0gskICYv3a@cluster0.dwpglrg.mongodb.net/?retryWrites=true&w=majority/mvc-project')
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
