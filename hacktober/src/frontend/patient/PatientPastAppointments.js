import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const PatientPastAppointments = () => {
  const [pastAppointments, setPastAppointments] = useState([]);

  // Simulated data for past appointments
  const mockPastAppointments = [
    {
      id: 1,
      date: '2023-01-15',
      doctor: 'Dr. Smith',
      totalBill: 150.0,
      files: [
        { id: 1, name: 'Prescription.pdf', type: 'pdf' },
        { id: 2, name: 'X-Ray.jpg', type: 'jpg' },
      ],
    },
    {
      id: 2,
      date: '2023-02-20',
      doctor: 'Dr. Johnson',
      totalBill: 75.0,
      files: [
        { id: 3, name: 'Prescription.pdf', type: 'pdf' },
      ],
    },
    // Add more past appointment data as needed
  ];

  useEffect(() => {
    // In a real application, you would fetch the patient's past appointments from an API here.
    // For demonstration purposes, we use mock data.
    setPastAppointments(mockPastAppointments);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Past Appointments</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Total Bill</th>
                <th>Files</th>
              </tr>
            </thead>
            <tbody>
              {pastAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.date}</td>
                  <td>{appointment.doctor}</td>
                  <td>Rs. {appointment.totalBill.toFixed(2)}</td>
                  <td>
                    <ul>
                      {appointment.files.map((file) => (
                        <li key={file.id}>
                          <a
                            href={'#'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {file.name} ({file.type})
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientPastAppointments;