const exp=require("express");
const docApp=exp.Router();
const errHandlingMiddleware=require("express-async-handler");
const bcryptjs=require("bcryptjs");
const jwt = require("jsonwebtoken");

const verifyToken=require("../Middlewares/verifyToken");

docApp.use(exp.json());


//Registering a doctor
docApp.post("/register-doctor",errHandlingMiddleware(async(req,res)=>{
    const doctorsCollection=req.app.get("doctorsCollection");

    let newDoc=req.body;
    let hashedpassword=await bcryptjs.hash(newDoc.password,6);
    newDoc.password=hashedpassword;

    await doctorsCollection.insertOne(newDoc);

    res.status(201).send({message:"Registration Successful"})

}))

//login
docApp.post("/login-doctor",errHandlingMiddleware(async(req,res)=>{
    const doctorsCollection=req.app.get("doctorsCollection");

    const patCred=req.body;

    let pat=await doctorsCollection.findOne({username:patCred.username});

    if(pat==null){
        res.status(200).send({message:"Invaild username"});
    }else{
        let checkPass=bcryptjs.compare(patCred.password,pat.password);
        if(checkPass==false){
            res.status(200).send({message:"Invaild Password"});
        }else{
            const secretKey="abcdef";
            let jwtToken=jwt.sign({username:pat.username},secretKey,{expiresIn:"7d"})
            res.status(201).send({message:"Valid user",token:jwtToken,doctor_username:patCred.username})
        }
    }
}))

//pvt route testing
docApp.get("/display-appointments",verifyToken,errHandlingMiddleware(async(req,res)=>{
    res.status(201).send({message:"ALL GOOD"});
}))

module.exports=docApp;