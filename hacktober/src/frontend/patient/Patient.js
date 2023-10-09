import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
    useNavigate
} from 'react-router-dom';
const Patient = () => {
    
    const navigate = useNavigate();
    const handleAppointment = () => {
        console.log('nitin');
        navigate('/book-appointment');
    }
    const handleHealth=()=>{
        navigate('/healthinfo');
    }
    const handlePastvisits=()=>{
        navigate('/pastvisits')
    }
    return (
        <Container className="mt-4">
            <h1 className="text-center"> hii, {localStorage.getItem("patient_username")}</h1>
            <Row>
                <Col md={12} className="mb-4">
                    <Card>
                        <Card.Body>
                            <h2>Schedule an Appointment</h2>
                            <p>
                                Schedule an appointment with your healthcare provider to discuss your
                                health concerns or get a check-up.
                            </p>
                            <button
                                className='btn btn-success'
                                onClick={handleAppointment}
                            >
                                Schedule Appointment
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <h2>Current Health Information</h2>
                            <p>
                                Access your current health information, test results, and treatment
                                plans.
                            </p>
                            <button
                                className='btn btn-success'
                                onClick={handleHealth}
                            >
                            View Health Information
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mb-4 mt-4">
                    <Card>
                        <Card.Body>
                            <h2>Past Appointments</h2>
                            <p>
                                View your past appointments to see your medical history and track your
                                healthcare journey.
                            </p>
                            <button
                                className='btn btn-success'
                                onClick={handlePastvisits}
                            >
                                View Past Applications 
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Patient;