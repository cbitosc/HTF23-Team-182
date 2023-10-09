import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Doctor = () => {
    const navigate=useNavigate();
    const handleUpcomingAppointments=()=>{
        navigate('/upcomingappointments');
    }
    const handlePastAppointments=()=>{
        navigate('/pastappointments');
    }
    const handleManagePatients=()=>{
        navigate('/managepatients');
    }
  return (
    <Container className="mt-4">
      <h1 className='text-center'>hii, {localStorage.getItem("doctor_username")}</h1>
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <h2>Upcoming Appointments</h2>
              <p>
                View and manage your upcoming appointments with patients.
              </p>
              <button
                                className='btn btn-success'
                                onClick={handleUpcomingAppointments}
                            >
                                Upcoming Appointments
                            </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4 mt-4">
          <Card>
            <Card.Body>
              <h2>Past Appointments</h2>
              <p>
                Review your past appointments and patient history.
              </p>
              <button
                                className='btn btn-success'
                                onClick={handlePastAppointments}
                            >
                                Past Appointments
                            </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h2>Manage Patient Records</h2>
              <p>
                Access and update patient records, prescriptions, and treatment plans.
              </p>
              <button
                                className='btn btn-success'
                                onClick={handleManagePatients}
                            >
                                Manage Patient Records
                            </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctor;