import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Content from '../components/Content';

import mood_1 from '../assets/images/mood/mood_1.png';
import mood_2 from '../assets/images/mood/mood_2.png';
import mood_3 from '../assets/images/mood/mood_3.png';
import mood_4 from '../assets/images/mood/mood_4.png';

function MoodPage(props) {
  return(
    <Content>
        <h2 className="pt-5 pb-3">Mood</h2>
        <p>This app was designed for Macy’s employees, who will be able to record their moods everyday by picking up different emotion faces and displaying a histogram in the end.</p>
        
        <div>
          <h5 className="pt-4">Project Background:</h5>
          <p>I heard there's a new framework called “React Native” is pretty popular these days, which is very similar to “React JS” that I already knew, and can easily create apps for both IOS and Android by using one code base. Since I don’t want to be restricted to do web development, and React Native saves my time to learn two new languages or more for IOS and Android development, I started learning React Native myself by reading through documentations and watching tutorial videos. Then I designed and developed this app for Macy’s employees, who will be able to record their moods everyday by picking up different emotion faces and displaying a histogram in the end. Besides I picked Macy’s red for its primary color since it’s for Macy’s internal use.</p>
        </div>

        <div>
          <h5 className="pt-4">Technology:</h5>
          <p>JavaScript, JSX, SCSS, React Native</p>
        </div>

        <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "260px", fontFamily: "cursive", fontWeight: "900", letterSpacing: "1.5px"}}>App Screenshots</legend>
              <Container fluid={true} className="p-4">
                <Row className="justify-content-around pt-2 pb-4">
                  <Col>
                    <img src={mood_1} alt='mood_1' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={mood_2} alt='mood_2' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={mood_3} alt='mood_3' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={mood_4} alt='mood_4' className="img-fluid" />
                  </Col>
                </Row>
              </Container>
            </fieldset>
          </div>
      </Content>
  );
}

export default MoodPage;
