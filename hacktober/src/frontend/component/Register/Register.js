import './Register.css'
import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [isDoctor, setIsDoctor] = useState(false);
  const [username, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate=useNavigate()
  const handleusernameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your registration logic here
    // Typically, you would make an API request to create a new account
    // For this example, we'll just log the entered information
    if (isDoctor) {
      let doctor={
        "username":username,
        "email":email,
        "specialization":specialization,
        "password":password
      }
      let res=await axios.post('http://localhost:3000/doctor-api/register-doctor',doctor
      )
    } else {
       let patientData={
         "username":username,
         "email":email,
         "password":password
       }
       let res=await axios.post('http://localhost:3000/patient-api/register-patient',patientData
       )
    }
    navigate('/login')
  };

  const toggleRegistrationType = useCallback(() => {
    setIsDoctor((prevIsDoctor) => !prevIsDoctor);
  }, []);

  return (
    <div className='RegisterCss container-fluid'>
      <style>{'body{background-color:#a3e4de;}'}</style>
      <Row className="justify-content-center mt-5 ">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4 ">
            {isDoctor ? 'Doctor Registration' : 'Patient Registration'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={handleusernameChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            {isDoctor && (
              <div className="mb-3">
                <label htmlFor="specialization" className="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="specialization"
                  placeholder="Enter specialization"
                  value={specialization}
                  onChange={handleSpecializationChange}
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>

            <p className="mt-3 text-center">
              {isDoctor ? 'Are you a patient?' : 'Are you a doctor?'}{' '}
              <span
                className="link-like text-primary "
                onClick={toggleRegistrationType}
              >
                {isDoctor ? 'Switch to Patient Registration' : 'Switch to Doctor Registration'}
              </span>
            </p>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;