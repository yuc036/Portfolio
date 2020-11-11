import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Content from '../components/Content';

import bart_1 from '../assets/images/bart/bart_1.webp';
import bart_2 from '../assets/images/bart/bart_2.webp';
import bart_3 from '../assets/images/bart/bart_3.webp';
import bart_4 from '../assets/images/bart/bart_4.webp';
import bart_5 from '../assets/images/bart/bart_5.webp';
import bart_6 from '../assets/images/bart/bart_6.webp';
import bart_7 from '../assets/images/bart/bart_7.webp';
import bart_8 from '../assets/images/bart/bart_8.webp';

function BartPage(props) {
  let url = "https://play.google.com/store/apps/details?id=com.eddystudio.bartbetter&hl=en_US";
  return(
    <Content>
        <h2 className="pt-5 pb-3">Bart Better</h2>
        <p><a href={url} target="_blank" rel="noopener noreferrer" style={{color: "#000", fontWeight: "600"}}>Bart Better</a> is used to track real-time schedule for <b>BART (Bay Area Rapid Transit)</b> system. You can use <i>"Quick Lookup"</i> to get basic info, add your favorite routes to <i>"My Routes"</i>, and check all the real-time departure time, delay status, even the fare calculator there. You can find an all-routes BART map from <i>"General"</i> and contact us from the same place if any problems.</p>
        
        <div>
          <h5 className="pt-4">Project Background:</h5>
          <p>After graduation, I moved to Bay Area and joined Macy's Inc which located in the city of San Francisco, I need to take the train (Bay Area Rapid Transit -> <b>BART</b>) every weekday to get to work. Since I can’t find a satisfying app to track the real-time BART schedule from the current App Store, my friend and I decided to write a new <b>Android</b> App named as <b>“Bart Better”</b> to provide a more user-friendly experience for people living in Bay Area and need to take BART to commute every day.</p>
        </div>

        <div>
          <h5 className="pt-4">Research Process:</h5>
          <p>In the early stage of design, I spent months on researches. I wrote a questionnaire and asked my friends around who were using BART apps frequently for their opinions about the current BART apps. Then I downloaded 10 Android BART Apps and 5 IOS Bart Apps from the current app store, applied a batch test on them for three months, and created usage logs to record my experience of using these apps. I found that some of apps are easy to use but their UIs are too concise, some of the apps look pretty fancy but most of the features are not very practical, some of the apps has great UIs but their data is not very accurate, etc. I also read through the reviews/feedbacks of these apps and summed up with 3 pros and cons for each app. All of these research processes helped me a lot in framing the problem and then proposing better solutions. After few months of research and summarizing, I found out that people care most about the app fluency and accuracy, next is the ui design. I also noticed that a lot of people are very interested in dark mode, so we added <b>“Dark Mode”</b> as an optional theme for our app. A lot of users also complained about they don’t know where they are on the map, or how many stops left away from their destination, so we also added a <b>collapsible live map</b> on the homepage, which would be a great optional feature for users who want to know their current location.</p>
        </div>

        <div>
          <h5 className="pt-4">My Role:</h5>
          <p>I played as the <b>UI/UX designer</b> in the development process of this app. I used <b>sketch</b> and followed the <b>material design</b> pattern developed by Google to create app logos, design and help develop the user interface. I also updated the app design occasionally along with app feature upgrades and aesthetic trend changes in Android app design area.</p>
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
                    <img src={bart_1} alt='bart_1' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={bart_2} alt='bart_2' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={bart_3} alt='bart_3' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={bart_4} alt='bart_4' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={bart_5} alt='bart_5' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={bart_6} alt='bart_6' className="img-fluid" />
                  </Col>
                </Row>
                <Row className="justify-content-around py-4">
                  <Col>
                    <img src={bart_7} alt='bart_7' className="img-fluid" />
                  </Col>
                  <Col>
                    <img src={bart_8} alt='bart_8' className="img-fluid" />
                  </Col>
                </Row>
              </Container>
            </fieldset>
          </div>
      </Content>
  );
}

export default BartPage;
