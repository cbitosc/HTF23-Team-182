import React, { useState } from 'react';
import './Appointment.css';
import axios from "axios";
// const LocalStorage = require('node-localstorage').LocalStorage;
// const localStorage = new LocalStorage('E:\cbith\HTF23-Team-182\hacktober\src\backend\localStorage');

function Appointment() {
  const [doctors] = useState([
    { id: 1, username: 'Dr. Smith', specialization: 'Cardiology' },
    { id: 2, username: 'Dr. Johnson', specialization: 'Dermatology' },
    { id: 3, username: 'Dr. Brown', specialization: 'Pediatrics' },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleDoctorSelect = (e) => {
    const selectedDoctorId = parseInt(e.target.value);
    const doctor = doctors.find((doc) => doc.id === selectedDoctorId);
    setSelectedDoctor(doctor);
  };

  const handleAppointmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  let [err, setErr] = useState("");
  let [data, setData] = useState("");

  const handleBookAppointment = () => {
    if (!selectedDoctor || !appointmentDate) {
      alert('Please select a doctor and choose an appointment date.');
      return;
    }

    // Here you can implement your booking logic (e.g., send a request to the server).
    alert(`Appointment booked with ${selectedDoctor.username} on ${appointmentDate}.`);
    let token = localStorage.getItem("token");

    const appointmentData = {
      patient_username: "", //localStorage.getItem("patient_username")
      doctor_username: selectedDoctor.username,
      date: appointmentDate,
    };
    console.log(appointmentData);
    axios
      .post("http://localhost:3000/appointment-api/book-appointment", appointmentData, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setData(response.data.message);
      })
      .catch((err) => {
        setErr(err.message);
      });

    // Reset selectedDoctor and appointmentDate to clear the form.
    setSelectedDoctor(null);
    setAppointmentDate('');
  };

  return (
    <div>
      <div className="container mt-5 card p-5 appointmentdesign">
        <h1 className="mb-4 d-block mx-auto headerr">Doctor Appointment Booking</h1>
        <hr />
        {doctors.length === 0 ? (
          <h1 className='text-primary text-center display-4 fw-bold'>
            No Doctors Available
          </h1>
        ) : (
          <div className="row d-block mx-auto">
            <div className="col-md-12">
              <h2>Select a Doctor</h2>
              <select
                className="form-select"
                onChange={handleDoctorSelect}
                value={selectedDoctor ? selectedDoctor.id : ''}
              >
                <option value="">Select a Doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.username} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-12">
              {selectedDoctor && (
                <div className='mt-3'>
                  <h2>Selected Doctor</h2>
                  <p>Name: {selectedDoctor.username}</p>
                  <p>Specialization: {selectedDoctor.specialization}</p>
                </div>
              )}

              <div className='mt-3'>
                <h2>Choose Appointment Date</h2>
                <input
                  type="date"
                  className="form-control"
                  value={appointmentDate}
                  onChange={handleAppointmentDateChange}
                />
              </div>

              <div className="mt-3">
                <button
                  className="btn btn-primary d-block m-auto "
                  onClick={handleBookAppointment}
                  disabled={!selectedDoctor || !appointmentDate}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Appointment;
