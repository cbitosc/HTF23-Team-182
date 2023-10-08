const exp=require("express");
const patApp=exp.Router();
const errHandlingMiddleware=require("express-async-handler");
const bcryptjs=require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken=require("../Middlewares/verifyToken");
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./localStorage');
//const Patient=require('../models/patientSchema');



patApp.use(exp.json());


//Registering a patient
patApp.post("/register-patient",errHandlingMiddleware(async(req,res)=>{
    const patientsCollection=req.app.get("patientsCollection");

    let newPat=req.body;
    let hashedpassword=await bcryptjs.hash(newPat.password,6);
    newPat.password=hashedpassword;

    await patientsCollection.insertOne(newPat);
    //let t=new Patient(newPat);
    //await t.save();
    res.status(201).send({message:"Registration Successful"})

}))

//login
patApp.post("/login-patient",errHandlingMiddleware(async(req,res)=>{
    const patientsCollection=req.app.get("patientsCollection");

    const patCred=req.body;

    let pat=await patientsCollection.findOne({username:patCred.username});

    if(pat==null){
        res.status(200).send({message:"Invaild username"});
    }else{
        let checkPass=bcryptjs.compare(patCred.password,pat.password);
        if(checkPass==false){
            res.status(200).send({message:"Invaild Password"});
        }else{
            const secretKey="abcdef";
            let jwtToken=jwt.sign({username:pat.username},secretKey,{expiresIn:"7d"})

            //local

            res.status(201).send({message:"Valid user",token:jwtToken,patient_username:patCred.username});
        }
    }
}))
//pvt route testing
patApp.get("/display-appointments",verifyToken,errHandlingMiddleware(async(req,res)=>{
    res.status(201).send({message:"ALL GOOD"});
}))
module.exports=patApp;