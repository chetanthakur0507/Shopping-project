const express=require('express');
const app=express();
const path =require('path');
const userModel=require('./models/user-model');
const productModel=require('./models/product-model');
const ownerModel=require('./models/owner-model');
const db=require('./config/mongoose-connection');

const cookieParser=require('cookie-parser');
const ownersRouter=require('./routes/ownersRouter');
const productsRouter=require('./routes/productsRouter');
const usersRouter=require('./routes/usersRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'pubic')));
app.use(cookieParser());

app.set('view engine','ejs');

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(3000,()=>{
    console.log("server is running")
    
})