import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './PatientCurrentHealth.css'; // Import your custom CSS file

const PatientCurrentHealth = () => {
  const [currentHealthInfo, setCurrentHealthInfo] = useState({});

  // Simulated data for current health information
  const mockCurrentHealthInfo = {
    appointmentDate: '2023-03-15',
    doctor: 'Dr. Smith',
    totalBill: 150.0,
    billStatus: 'Paid',
    remarks: 'Patient is doing well.',
    files: [
      { id: 1, name: 'Prescription.pdf', type: 'pdf' },
      { id: 2, name: 'X-Ray.jpg', type: 'jpg' },
    ],
  };

  useEffect(() => {
    // In a real application, you would fetch the patient's current health information from an API here.
    // For demonstration purposes, we use mock data.
    setCurrentHealthInfo(mockCurrentHealthInfo);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4">Current Health Information</h2>
          <Card className="health-card">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="health-item">
                  <strong>Appointment Date:</strong> {currentHealthInfo.appointmentDate}
                </ListGroup.Item>
                <ListGroup.Item className="health-item">
                  <strong>Doctor:</strong> {currentHealthInfo.doctor}
                </ListGroup.Item>
                <ListGroup.Item className="health-item">
                  <strong>Total Bill (Till Now):</strong> Rs. {currentHealthInfo.totalBill}
                </ListGroup.Item>
                <ListGroup.Item className="health-item">
                  <strong>Bill Status:</strong> {currentHealthInfo.billStatus}
                </ListGroup.Item>
                <ListGroup.Item className="health-item">
                  <strong>Remarks:</strong> {currentHealthInfo.remarks}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <h4 className="mb-3">X-rays/Prescriptions Uploaded by Doctor</h4>
              <ul className="list-unstyled">
                {currentHealthInfo.files && currentHealthInfo.files.map((file) => (
                  <li key={file.id}>
                    <a
                      href={'#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="file-link"
                    >
                      {file.name} ({file.type})
                    </a>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientCurrentHealth;