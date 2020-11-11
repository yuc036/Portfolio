import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Content from '../components/Content';

import shuttle_1 from '../assets/images/shuttle/shuttle_1.webp';
import shuttle_2 from '../assets/images/shuttle/shuttle_2.webp';
import shuttle_3 from '../assets/images/shuttle/shuttle_3.webp';
import shuttle_4 from '../assets/images/shuttle/shuttle_4.webp';
import shuttle_5 from '../assets/images/shuttle/shuttle_5.webp';
import shuttle_6 from '../assets/images/shuttle/shuttle_6.webp';

function ShuttlePage(props) {
  let url = "https://play.google.com/store/apps/details?id=com.eddystudio.shuttletracker&hl=en_US";
  return(
    <Content>
        <h2 className="pt-5 pb-3">UCSD Shuttle Tracker</h2>
        <p>With <a href={url} target="_blank" rel="noopener noreferrer" style={{color: "#000", fontWeight: "600"}}>UCSD Shuttle Tracker</a>, you can easily track one or more shuttle routes simultaneously, see shuttle stops near your location, the estimated time of arrival. From the navigation drawer, you can see the combined routes of all shuttles around the campus, check the shuttle symbols listed clearly, and get the time table for each bus. You can also call the UCSD shuttle office easily by clicking on the <i>"Call Office"</i> button.</p>
        
        <div>
          <h5 className="pt-4">Project Background:</h5>
          <p>UCSD students needs to take shuttles very often. However, there're no inidividual apps for shuttle tracking. Therefore, my friend and I decided to develop an Android App for UCSD students to track shuttle status.</p>
        </div>

        <div>
          <h5 className="pt-4">My Role:</h5>
          <p>I'm in charge of the UX design of the app. I created the app logo, drew customized icons, and designed the user interface for this app.</p>
        </div>

        <div className="pt-4">
          <span>Download Link:&nbsp;</span>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{color: "grey"}}>{url}</a>
        </div>

        <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "260px", fontFamily: "cursive", fontWeight: "900", letterSpacing: "1.5px"}}>App Screenshots</legend>
              <Container fluid={true} className="p-4">
                <Row className="justify-content-around pt-2 pb-4">
                  <Col>
                    <img src={shuttle_1} alt='shuttle_1' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={shuttle_2} alt='shuttle_2' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={shuttle_3} alt='shuttle_3' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={shuttle_4} alt='shuttle_4' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={shuttle_5} alt='shuttle_5' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={shuttle_6} alt='shuttle_6' className="img-fluid" />
                  </Col>
                </Row>
              </Container>
            </fieldset>
          </div>
      </Content>
  );
}

export default ShuttlePage;
