const app=require('express')
const rout=app.Router();
const errHandlingMiddleware=require("express-async-handler");
const verifyToken=require("../Middlewares/verifyToken");

// patient_username, doctor_username,date

//booking appointment
rout.post('/book-appointment',verifyToken,errHandlingMiddleware(async(req,res)=>{
    let appointment=req.body;

    const appointmentsCollection=req.app.get("appointmentsCollection");

    await appointmentsCollection.insertOne(appointment);

    res.status(201).send({message:"Appointment booked successfully"});
}))

//patient request for appointments
rout.get('/get-patients-appointments/:username',verifyToken,errHandlingMiddleware(async(req,res)=>{
    const appointmentsCollection=req.app.get("appointmentsCollection");

    let patUsername=req.params;

    let appointmentsList=await appointmentsCollection.find({patient_username:patUsername}).toArray();

    res.status(201).send({payload:appointmentsList,message:"Appoinments sent successfully"});
}))

//doctor request for appointments
rout.get('/get-doctors-appointments/:username',verifyToken,errHandlingMiddleware(async(req,res)=>{
    const appointmentsCollection=req.app.get("appointmentsCollection");

    let docUsername=req.params.username;

    let appointmentsList=await appointmentsCollection.find({doctor_username:docUsername}).toArray();

    res.status(201).send({payload:appointmentsList,message:"Appoinments sent successfully"});
}))




module.exports=rout;