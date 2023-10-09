import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, FormControl } from 'react-bootstrap';

const DoctorManagePatients = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [billAmounts, setBillAmounts] = useState({});
  const [remarks, setRemarks] = useState('');
  const [previousRemarks, setPreviousRemarks] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Mock files
  const mockFiles = [
    {
      name: 'X-ray_Image.jpg',
      size: '2.3 MB',
      type: 'image/jpeg',
    },
    {
      name: 'Prescription.pdf',
      size: '1.1 MB',
      type: 'application/pdf',
    },
    // Add more mock files as needed
  ];

  // Simulated data for patient records
  const mockPatients = [
    {
      id: 1,
      name: 'John Doe',
      mobileNumber: '123-456-7890',
      email: 'john@example.com',
      totalBill: 100.0, // Initial total bill
      patientRemarks: 'Patient is doing well.',
    },
    {
      id: 2,
      name: 'Alice Smith',
      mobileNumber: '987-654-3210',
      email: 'alice@example.com',
      totalBill: 50.0, // Initial total bill
      patientRemarks: 'Follow-up required in two weeks.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      mobileNumber: '555-555-5555',
      email: 'bob@example.com',
      totalBill: 200.0, // Initial total bill
      patientRemarks: 'Prescribed antibiotics for infection.',
    },
  ];

  useEffect(() => {
    // In a real application, you would fetch the doctor's patients from an API here.
    // For demonstration purposes, we use mock data.
    setPatients(mockPatients);
  }, []);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setBillAmounts({ ...billAmounts, [patient.id]: '' });
    setPreviousRemarks({ ...previousRemarks, [patient.id]: patient.patientRemarks });
    setRemarks('');
  };

  const handleBillAmountChange = (patientId, amount) => {
    setBillAmounts({ ...billAmounts, [patientId]: amount });
  };

  const handleAddBill = (patient) => {
    if (billAmounts[patient.id]) {
      const updatedPatients = patients.map((p) =>
        p.id === patient.id
          ? {
              ...p,
              totalBill: p.totalBill + parseFloat(billAmounts[patient.id]),
            }
          : p
      );
      setPatients(updatedPatients);
      // Reset the bill amount for the selected patient
      setBillAmounts({ ...billAmounts, [patient.id]: '' });
    }
  };

  const handleAddRemarks = () => {
    if (selectedPatient && remarks) {
      const updatedRemarks =
        (previousRemarks[selectedPatient.id] ? previousRemarks[selectedPatient.id] + '\n' : '') + remarks;

      setPreviousRemarks({ ...previousRemarks, [selectedPatient.id]: updatedRemarks });
      setRemarks('');
    }
  };

  const handleFileUpload = (patientId, e) => {
    // Handle the file upload logic here, e.g., store the file in state or send it to a server.

    // For demonstration purposes, we'll simply update the state with the mock files.
    const files = e.target.files;
    const newFiles = uploadedFiles[patientId] ? [...uploadedFiles[patientId]] : [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newFiles.push({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
      });
    }

    setUploadedFiles({ ...uploadedFiles, [patientId]: newFiles });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Manage Patients</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Total Bill (till now)</th>
                <th>Add Bill</th>
                <th>View/Edit Remarks</th>
                <th>Upload X-ray/Prescription</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.mobileNumber}</td>
                  <td>{patient.email}</td>
                  <td>Rs. {patient.totalBill.toFixed(2)}</td>
                  <td>
                    <Row>
                      <div className="col-md-8 d-flex">
                        <FormControl
                          type="text"
                          placeholder="Enter bill amount"
                          value={billAmounts[patient.id] || ''}
                          onChange={(e) =>
                            handleBillAmountChange(patient.id, e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-4">
                        <Button
                          variant="primary"
                          onClick={() => handleAddBill(patient)}
                        >
                          Add
                        </Button>
                      </div>
                    </Row>
                  </td>
                  <td>
                    <div className="d-flex">
                      <Button
                        variant="primary"
                        onClick={() => handlePatientSelect(patient)}
                        size="sm" // Set the size of the button to small
                      >
                        View/Edit Remarks
                      </Button>
                    </div>
                  </td>
                  <td>
                    <input
                      type="file"
                      id={`fileInput-${patient.id}`}
                      onChange={(e) => handleFileUpload(patient.id, e)}
                      multiple // Allow multiple file selection
                    />
                    {uploadedFiles[patient.id] && (
                      <ul>
                        {uploadedFiles[patient.id].map((file, index) => (
                          <li key={index}>
                            <strong>{file.name}</strong> ({file.size}, {file.type})
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {selectedPatient && (
            <div>
              <h3>Selected Patient: {selectedPatient.name}</h3>
              <div>
                <h4>Previous Remarks:</h4>
                <p>{previousRemarks[selectedPatient.id]}</p>
              </div>
              <div>
                <h4>Remarks:</h4>
                <textarea
                  rows={3}
                  placeholder="Enter remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
              <Button variant="primary" className="mt-3" onClick={handleAddRemarks}>
                Update Remarks
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorManagePatients;