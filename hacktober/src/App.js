import React from 'react'
import Login from './frontend/doctor/login/Login';
import Rootlayout from './frontend/component/Rootlayout';
import Home from './frontend/component/home/Home';
import Register from './frontend/component/Register/Register';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Patient from './frontend/patient/Patient';
import Appointment from './frontend/patient/Appointment';
import Doctor from './frontend/doctor/doctorduty/Doctor';
import DoctorManagePatients from './frontend/doctor/doctorupcoming/DocotrManagePatients';
import DoctorPastAppointments from './frontend/doctor/doctorupcoming/DoctorPastAppointments';
import DoctorUpcomingAppointments from './frontend/doctor/doctorupcoming/DoctorUpcomingAppointments';
import PatientCurrentHealth from './frontend/patient/PatientCurrentHealth';
import PatientPastAppointments from './frontend/patient/PatientPastAppointments';

function App() {

  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<Rootlayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/patient",
          element:<Patient/>
        },
        {
          path:"/book-appointment",
          element:<Appointment />
        },
        {
          path:"/doctor",
          element:<Doctor/>
        },
        {
          path:"/healthinfo",
          element:<PatientCurrentHealth/>
        },
        {
          path:"/pastvisits",
          element:<PatientPastAppointments/>
        },
        {
          path:"/upcomingappointments",
          element:<DoctorUpcomingAppointments/>
        },
        {
          path:"/pastappointments",
          element:<DoctorPastAppointments/>
        },
        {
          path:"/managepatients",
          element:<DoctorManagePatients/>
        }
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={browserRouter} />
    </div>
  );
}
export default App