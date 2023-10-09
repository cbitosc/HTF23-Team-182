import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const DoctorPastAppointments = () => {
  const [pastAppointments, setPastAppointments] = useState([]);

  // Simulated data for past appointments
  const mockPastAppointments = [
    {
      id: 1,
      date: '2023-01-15',
      patient: 'John Doe',
      mobileNumber: '123-456-7890',
      billStatus: 'Paid',
      billAmount: 50.0,
      remarks: 'Patient was recovering well.',
    },
    {
      id: 2,
      date: '2023-02-20',
      patient: 'Alice Smith',
      mobileNumber: '987-654-3210',
      billStatus: 'Not Paid',
      billAmount: 75.0,
      remarks: 'Follow-up required in two weeks.',
    },
    {
      id: 3,
      date: '2023-03-10',
      patient: 'Bob Johnson',
      mobileNumber: '555-555-5555',
      billStatus: 'Paid',
      billAmount: 60.0,
      remarks: 'Prescribed antibiotics for infection.',
    },
  ];

  useEffect(() => {
    // In a real application, you would fetch the doctor's past appointments from an API here.
    // For demonstration purposes, we use mock data.
    setPastAppointments(mockPastAppointments);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Past Appointments</h2>
          {pastAppointments.length === 0 ? (
            <p>No past appointments found.</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Patient</th>
                  <th>Patient Mobile Number</th>
                  <th>Bill Status</th>
                  <th>Bill Amount</th>
                  <th>Remarks</th>
                  <th>View Detailed Info</th>
                </tr>
              </thead>
              <tbody>
                {pastAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.date}</td>
                    <td>{appointment.patient}</td>
                    <td>{appointment.mobileNumber}</td>
                    <td>{appointment.billStatus}</td>
                    <td>Rs. {appointment.billAmount.toFixed(2)}</td>
                    <td>{appointment.remarks}</td>
                    <td>
                      <a href={`/view-detailed-info/${appointment.id}`}>
                        View Detailed Info
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorPastAppointments;