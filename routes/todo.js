const express=require('express');
const route=express.Router();
const TodoListe=require('../model/todoliste');


route.get('/list',async(req,res)=>{

    try{
        
        const resutl=await TodoListe.find();
        return res.status(200).send(resutl);
        

    }catch(err)
    {
        return res.status(400).send(err.message);
    }
})
route.post('/ajouter',async(req,res)=>{

    try{

        const todo=new TodoListe(req.body);
        const result=await todo.save();
        res.send(result);

    }catch(err)
    {
        res.send(err.message);
    }


})

route.get('/supprimer/:id',async(req,res)=>{


    try{
        
        console.log(req.params.id);
        const resutl=await TodoListe.findOneAndDelete({_id:req.params.id});
        res.send(resutl);
    }catch(err)
    {
        res.send(err.message);
    }
})

route.post('/update/:id',async(req,res)=>{

    try{

        const id=req.params.id;
        const todo=await TodoListe.findByIdAndUpdate(id,req.body);
        todo.content=req.body.content;
        todo.date=req.body.date;
        let resutl=await todo.save();
        return res.status(200).send(resutl);
    }catch(err)
    {
        res.status(400).send(err.message);
    }



})

module.exports=route;
