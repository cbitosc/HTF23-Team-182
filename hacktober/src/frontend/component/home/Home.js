import React  from 'react';
import Hospital from './Hospital.png'
import "./Home.css"
import { Row, Col } from 'react-bootstrap';


function Home(){
    return(
        <div className='pt-5 mainPage container-fluid'>
            <img className="image " src={Hospital}></img>
            <Row className="welcome-text me-3">
                <Col md={12} className='ps-5 ms-2 welcome-heading'><h1 className='display-3  fw-bold'>Welcome to ANK Hospitals</h1></Col>
                <Col><p className=' ps-5 ms-2 lead fw-bold welcome-paragraph'>Your Trusted Healthcare Provider</p></Col>
            </Row>
        </div>
    );
}


export default Home;