const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const bearerToken=req.headers.authorization;

    if(bearerToken==undefined){
        res.status(200).send({message:"Unauthorized access... Plz login first"});
    }else{
        const token=bearerToken.split(" ")[1];
        try{
            jwt.verify(token,"abcdef");
            next();
        }catch(err){
            next(err.message);
        }
    }
}



module.exports=verifyToken;