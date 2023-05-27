const mongoose=require('mongoose');

const TodoListe=mongoose.model('todoliste',{

    content:{type:String,required:true},
    date:{type:String ,required:true}


})

module.exports=TodoListe;