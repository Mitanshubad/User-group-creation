const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8000;
require('./db/conn')
const bcrypt = require('bcryptjs')
const cors  = require('cors')
app.use(cors());
const jwt = require('jsonwebtoken');
app.use(express.json());
const Registration = require('./models/register')

app.get('/',(req,res)=>{
    res.send('hello');
})


// registering the data in database

app.post('/register',async(req,res)=>{
    
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password===cpassword){
            const registerone =  new Registration({
            name : req.body.name,
            email: req.body.email,
            password : password,
            cpassword : cpassword
        })
        const registered = await registerone.save();
        
        res.status(201).render("index");
    }else{
        alert("password are not matching")
    }
}
    catch(err){
        res.status(400).send(err);
    }
    

})
app.get('/register',async(req,res)=>{
    try{
        const data = await Registration.find();
    res.status(201).send(data)
    }
    catch(e){
        res.status(400).send(e);
    }
})

// login api

app.post('/login',async(req,res)=>{
    
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user =await Registration.findOne({email:email})
        const ismatch = await bcrypt.compare(password,user.password)
        if(ismatch){
            res.status(201)
            // this would be res.json because we are using api to fetch data from frontend and only json can be 
            //recognized so not use res.send
            

            const token=jwt.sign({email,password},'my-secret-key')
            console.log(`token is: ${token}`);
            res.json( {message:'hii from login',user:token} );
        }else{
           
            res.json( 'invalid' );
        }
    }
    catch(e){
        console.log(e);
    }
})


app.get('/home',(req,res)=>{
    res.send('hello from home');
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})