import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const DoctorUpcomingAppointments = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  // Simulated data for upcoming appointments
  const mockUpcomingAppointments = [
    {
      id: 1,
      date: '2023-05-15',
      patient: 'John Doe',
      contactInfo: 'john@example.com, (123) 456-7890',
    },
    {
      id: 2,
      date: '2023-06-20',
      patient: 'Alice Smith',
      contactInfo: 'alice@example.com, (456) 789-0123',
    },
    {
      id: 3,
      date: '2023-07-10',
      patient: 'Bob Johnson',
      contactInfo: 'bob@example.com, (789) 012-3456',
    },
  ];

  useEffect(() => {
    // In a real application, you would fetch the doctor's upcoming appointments from an API here.
    // For demonstration purposes, we use mock data.
    setUpcomingAppointments(mockUpcomingAppointments);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Upcoming Appointments</h2>
          {upcomingAppointments.length === 0 ? (
            <p>No upcoming appointments found.</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Patient</th>
                  <th>Contact Info</th>
                </tr>
              </thead>
              <tbody>
                {upcomingAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.date}</td>
                    <td>{appointment.patient}</td>
                    <td>{appointment.contactInfo}</td>
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

export default DoctorUpcomingAppointments;