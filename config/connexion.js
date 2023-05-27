const mongoose=require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/todolistedb').then(()=>{
    console.log("base connected jawna bahi");
}).catch((err)=>{
    console.log(err.message);
})


