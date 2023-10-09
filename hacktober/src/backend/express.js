const exp=require("express")
const app=exp();
const expAsyncHandler=require('express-async-handler');
const verifyToken=require("./Middlewares/verifyToken");
const mClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nishanth2106g:JuqfNpeGKjlblx8s@cluster0.f6ujy9g.mongodb.net/?retryWrites=true&w=majority";




const path=require("path");
app.use(exp.static(path.join("E:\cbith\HTF23-Team-182\hacktober\public")));

app.use(exp.json());
 const cors = require('cors');
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3001', // Allow requests from this origin
//     methods: 'GET,POST',             // Allow specific HTTP methods
//     // Add other CORS options as needed
//   }));

app.listen(3000,()=>console.log("Server listening on port 3000"))


const patApp=require("./APIS/patientApi");
app.use('/patient-api',patApp);

const docApp=require("./APIS/doctorApi");
app.use('/doctor-api',docApp);

const rout=require("./APIS/appointmentApi");
app.use('/appointment-api',rout);

//connecting db server
mClient.connect(uri)
.then((dbRef)=>{
    const dbObj=dbRef.db("hackthondb");

    const patientsCollection=dbObj.collection("patientsCollection");

    app.set("patientsCollection",patientsCollection);

    const doctorsCollection=dbObj.collection("doctorsCollection");

    app.set("doctorsCollection",doctorsCollection);

    const appointmentsCollection=dbObj.collection("appointmentsCollection");

    app.set("appointmentsCollection",appointmentsCollection);

    console.log("DB connection established successfully");
})




//requests



//error handling middlewares
const errHandlingMiddleware=(err,req,res,next)=>{
    res.status(280).send({message:err.message});
}
app.use(errHandlingMiddleware);

const invalidPathMiddleware=(req,res,next)=>{
    res.status(200).send({message:'Invalid Path'});
}
app.use("*",invalidPathMiddleware);

//Private middle wares
app.use("/patient-api/display-appointmenst",verifyToken)