import React from 'react';

import Content from '../components/Content';

import brand_1 from '../assets/images/brand/brand_1.png';
import brand_2 from '../assets/images/brand/brand_2.png';
import brand_3 from '../assets/images/brand/brand_3.png';
import brand_4 from '../assets/images/brand/brand_4.png';
import brand_5 from '../assets/images/brand/brand_5.png';
import brand_6 from '../assets/images/brand/brand_6.png';
import brand_7 from '../assets/images/brand/brand_7.png';
import brand_8 from '../assets/images/brand/brand_8.png';

function BrandPage(props) {
  return(
    <Content>
        <h2 className="pt-5 pb-3">Macy's Profile Building</h2>
        <p>This is a team project about developing a new feature for Macy's.com done by all new grads who freshly joined Macy's in our first year. I designed and developed a webpage for customers to choose their favorite brands and save to preferences.</p>

        <div>
          <h5 className="pt-4">Technology:</h5>
          <p>JavaScript, jQuery, SCSS, Backbone and Spring Boot</p>
        </div>

        <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "220px", fontFamily: "cursive", fontWeight: "900", letterSpacing: "1.5px"}}>Screenshots</legend>
              <div className="px-4">
                <img src={brand_1} alt='brand_1' className="img-fluid p-4" />
                <img src={brand_2} alt='brand_2' className="img-fluid p-4" />
                <img src={brand_3} alt='brand_3' className="img-fluid p-4" />
                <img src={brand_4} alt='brand_4' className="img-fluid p-4" />
                <img src={brand_5} alt='brand_5' className="img-fluid p-4" />
                <img src={brand_6} alt='brand_6' className="img-fluid p-4" />
                <img src={brand_7} alt='brand_7' className="img-fluid p-4" />
                <img src={brand_8} alt='brand_8' className="img-fluid p-4" />
              </div>
            </fieldset>
          </div>
      </Content>
  );
}

export default BrandPage;
