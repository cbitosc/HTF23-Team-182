import React, { useState } from 'react';
import Patient from '../../patient/Patient';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css'

function Login () {
  //const localStorage=new LocalStorage('./localStorage')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const [err,setErr] =useState(undefined);
  const handleRoleChange = (role) => {
    setUserType(role);
  };

  const navigate= useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (userType === 'patient') {
      let res=await axios.post('http://localhost:3000/patient-api/login-patient',{"username":email,"password":password})
      localStorage.setItem("patient_username",res.data.patient_username);
      localStorage.setItem("token",res.data.token);
      navigate('/patient')
    } else {
      let res=await axios.post('http://localhost:3000/doctor-api/login-doctor',{"username":email,"password":password})
      localStorage.setItem("doctor_username",res.data.doctor_username);
      localStorage.setItem("token",res.data.token);
      navigate('/doctor')
    }
  };
  return (
    
    <div className="container mt-5">
      <style>{'body{background-color:#a3e4de;}'}</style>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-5 border border-3 border-dark rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <div className="text-center mb-4">
                <button
                  className={`btn ${userType === 'patient' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handleRoleChange('patient')}
                >
                  Patient
                </button>{' '}
                <button
                  className={`btn ${userType === 'doctor' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handleRoleChange('doctor')}
                >
                  Doctor
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                  <label>Username:</label>
                  <input
                    type="username"
                    className="form-control"
                    placeholder="Enter username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;