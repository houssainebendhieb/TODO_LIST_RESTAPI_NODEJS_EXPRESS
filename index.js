const express=require('express');
const app=express();
require('./config/connexion');
const TodoListe=require('./model/todoliste');
app.use(express.json());

const todos=require('./routes/todo');

app.use('/todos',todos);

app.listen(3000,()=>{
    console.log('hello world');
})