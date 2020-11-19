import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Content from '../components/Content';

import desktop from '../assets/images/redesign/Desktop.jpg';
import tablet from '../assets/images/redesign/Tablet.jpg';
import mobile from '../assets/images/redesign/Mobile.jpg';

import desktop_old from '../assets/images/redesign/Desktop_old.png';
import tablet_old from '../assets/images/redesign/Tablet_old.png';
import mobile_old from '../assets/images/redesign/Mobile_old.png';

import new_header from '../assets/images/redesign/new_header.png';

import old_banner from '../assets/images/redesign/old_banner.png';
import desktop_banner from '../assets/images/redesign/desktop_banner.png';
import mobile_banner from '../assets/images/redesign/mobile_banner.png';

import old_carousel from '../assets/images/redesign/old_carousel.png';
import new_carousel from '../assets/images/redesign/new_carousel.png';

import shop_content from '../assets/images/redesign/shop_content.png';

import old_social_1 from '../assets/images/redesign/old_social_1.png';
import old_social_2 from '../assets/images/redesign/old_social_2.png';
import new_social from '../assets/images/redesign/new_social.png';

import kpis from '../assets/images/redesign/kpis.png';

function RedesignPage(props) {
  let url = "https://charrette-homepage-redesign.herokuapp.com";
  let github_url = "https://github.com/yuc036/Charrette-Homepage-Redesign";
  return(
    <div>
      <Content>
        <h2 className="pt-5 pb-3">Macy's Homepage Redesign</h2>
        <p>This project is designed for Macy's Charrette Homepage Redesign Hack-a-thon in August 2018, which is to redesign the homepage for <a href="https://www.macys.com/" target="_blank" rel="noopener noreferrer" style={{color: "#EA0000", fontWeight: "500"}}>macys.com</a>. I'm in charge of all the <b>frontend</b> development to bring the static design sketches to a responsive <b>dynamic</b> webpage.</p>
        <p>The <b>demo</b> is still alive and can be accessed via <a href={url} target="_blank" rel="noopener noreferrer" style={{color: "grey"}}>{url}</a>, and you can check the source code here: <a href={github_url} target="_blank" rel="noopener noreferrer" style={{color: "grey"}}>{github_url}</a></p>
        <p>I used <b>React JS</b> as the framework and this webpage is fully <b>responsive</b> as well, which works perfectly on either mobile, tablet or desktop.</p>
        
        <div className="pt-5">
          <h3>Customer Problem:</h3>
          <p>The Macy’s home page is <b>cluttered</b> with content that is <b>not relevant</b> to the customer, making it an overwhelming experience that is undesirable to shop on.</p>
        </div>

        <div className="pt-5">
          <span className="p-2 border border-dark rounded" style={{fontSize: "24px", fontWeight: "500"}}>Design Components</span>
          <div className="pt-2 pb-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "260px", fontWeight: "500"}}>Global Navigation</legend>
              <div className="p-4">
                <div>
                  <h5>Current Treatment:</h5>
                  <div className="px-4">
                    <div className="pb-4">
                      <p className="mb-1">Desktop header:</p>
                      <img src={desktop_old} alt='desktop_old' className="img-fluid" />
                    </div>
                    <div className="pb-4">
                      <p className="mb-1">Tablet header:</p>
                      <img src={tablet_old} alt='tablet_old' className="img-fluid" style={{maxWidth: "80%"}} />
                    </div>
                    <div className="pb-4">
                      <p className="mb-1">Mobile header:</p>
                      <img src={mobile_old} alt='mobile_old' className="img-fluid" style={{maxWidth: "40%"}} />
                    </div>
                    <div className="pt-3 text-secondary">
                      <span className="p-2 border rounded" style={{fontWeight: "500"}}>Pain points:</span>
                      <ul className="pt-2">
                        <li>Navigation taxonomy is complex, making the shopping journey more difficult</li>
                        <li>Cluttered with many elements</li>
                        <li>Confusion in terminology and overlap</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h5>Envisioned Treatment:</h5>
                  <img src={new_header} alt='new_header' className="img-fluid px-3" />
                </div>
              </div>
            </fieldset>
          </div>

          <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "180px", fontWeight: "500"}}>Banners</legend>
              <div className="p-4">
                <div>
                  <h5>Current Treatment:</h5>
                  <div className="px-4">
                    <img src={old_banner} alt='old_banner' className="img-fluid py-2" />
                    <div className="pt-4 text-secondary">
                      <span className="p-2 border rounded" style={{fontWeight: "500"}}>Pain points:</span>
                      <ul className="pt-2">
                        <li>Overloaded with text information</li>
                        <li>Inconsistent and outdated-looking</li>
                        <li>Not a source of inspiration</li>
                        <li>Irrelevant to the user</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h5>Envisioned Treatment:</h5>
                  <div className="px-4">
                    <img src={desktop_banner} alt='desktop_banner' className="img-fluid py-2" />
                    <img src={mobile_banner} alt='mobile_banner' className="img-fluid pt-5" />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "200px", fontWeight: "500"}}>Carousels</legend>
              <div className="p-4">
                <div>
                  <h5>Current Treatment:</h5>
                  <div className="px-4">
                    <img src={old_carousel} alt='old_carousel' className="img-fluid py-2" />
                    <div className="pt-4 text-secondary">
                      <span className="p-2 border rounded" style={{fontWeight: "500"}}>Pain points:</span>
                      <ul className="pt-2">
                        <li>Feels clunky with too much content stuffed in a row</li>
                        <li>Inconsistent across pages, even with the same viewport</li>
                        <li>Information feels unstructured and overwhelming</li>
                        <li>Images are small</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h5>Envisioned Treatment:</h5>
                  <div className="px-4">
                    <img src={new_carousel} alt='new_carousel' className="img-fluid py-2" />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "280px", fontWeight: "500"}}>Shoppable Content</legend>
              <div className="p-4">
                <div>
                  <h5>Envisioned Treatment:</h5>
                  <div className="px-4">
                    <img src={shop_content} alt='shop_content' className="img-fluid py-2" />
                    <ul className="pt-4">
                        <li>Personalized inspirational content becomes easy to shop directly in the same context—solves customer problem of not knowing how to find products in marketing content</li>
                        <li>Imagery across various categories can be tagged</li>
                        <li>More interactive and engaging marketing content</li>
                      </ul>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "240px", fontWeight: "500"}}>Social Media</legend>
              <div className="p-4">
                <div>
                  <h5>Current Treatment:</h5>
                  <div className="px-4">
                    <img src={old_social_1} alt='old_social_1' className="img-fluid py-2" />
                    <img src={old_social_2} alt='old_social_2' className="img-fluid py-2" />
                    <div className="pt-4 text-secondary">
                      <span className="p-2 border rounded" style={{fontWeight: "500"}}>Pain points:</span>
                      <p className="p-3 mb-0">Despite having a great Instagram feed for women (@macys) and for men (@macysmen) and accounts on the main social media platforms, there is no push to have customers engage with our social media on the site</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h5>Envisioned Treatment:</h5>
                  <div className="px-4">
                    <img src={new_social} alt='new_social' className="img-fluid py-2" />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="pt-5">
          <span className="p-2 border border-dark rounded" style={{fontSize: "24px", fontWeight: "500"}}>Rapid User Testing Findings</span>
          <div className="px-3">
            <p className="mt-3 mb-1" >Key Insights:</p>
            <ul>
              <li>Personalization of what customer is seeing makes the content relevant to the customer and more likely to be interested</li>
              <li>Balance of being inspired and seeing sales at the top of the page is important to the customer</li>
              <li>Customer love shop the look concept on Instagram, and want to shop in context of the page</li>
            </ul>
          </div>
        </div>

        <div className="pt-5">
          <span className="p-2 border border-dark rounded" style={{fontSize: "24px", fontWeight: "500"}}>Rapid User Testing - KPIs</span>
          <img src={kpis} alt='kpis' className="img-fluid p-4" />
        </div>

        <div className="py-5">
          <h3 className="pb-2">Next Steps:</h3>
          <ul>
            <li>Map out customer journeys to see how to differently prioritize content based on the customer type in designs, and test</li>
            <li>Give customer ability to give feedback about relevancy of content being shown</li>
            <li>Diving more into helpful animation/motion design to create a smooth and seamless experience (e.g. sticky header), motion on shoppable content)</li>
          </ul>
        </div>
        
        <div className="py-3">
          <fieldset className="border" >
            <legend className="text-center font-italic" style={{width: "150px", fontFamily: "cursive", fontWeight: "900", letterSpacing: "1.5px"}}>Sketches</legend>
            <div className="px-4 py-2">
              <Container fluid={true}>
                <p>Desktop:</p>
                <img src={desktop} alt='desktop' className="img-fluid" />
              </Container>
              <Container fluid={true}>
                <Row className="justify-content-around mx-2">
                  <Col md="8">
                    <p>Tablet:</p>
                    <img src={tablet} alt='tablet' className="img-fluid" />
                  </Col>
                  <Col md="4">
                    <p>Mobile:</p>
                    <img src={mobile} alt='mobile' className="img-fluid" />
                  </Col>
                </Row>
              </Container>
            </div>
          </fieldset>
        </div>
        
      </Content>
    </div>
  );
}

export default RedesignPage;
