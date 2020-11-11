import React from 'react';

import Content from '../components/Content';

import weather from '../assets/images/weather/weather.png';

function WeatherPage(props) {
  let url = "https://yuc036.github.io/weather.github.io";
  return(
    <Content>
        <h2 className="pt-5 pb-3">Weather</h2>
        <p>This <a href={url} target="_blank" rel="noopener noreferrer" style={{color: "#000", fontWeight: "600"}}>website</a> was created to check the current weather and weather forecast globally depending on the user’s current location or the zip code entered.</p>

        <div>
          <h5 className="pt-4">Technology:</h5>
          <p>I used Google APIs to locate the user after permission granted and to display a live map, and a public weather API as the backend to gather weather information. Also used techniques including HTML, CSS, JavaScript, JQuery, JSON, AJAX and REST API.</p>
        </div>

        <div className="pt-4">
          <span>Access Link:&nbsp;</span>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{color: "grey"}}>{url}</a>
        </div>

        <div className="py-4">
            <fieldset className="border" >
              <legend className="text-center font-italic" style={{width: "180px", fontFamily: "cursive", fontWeight: "900", letterSpacing: "1.5px"}}>Screenshots</legend>
              <img src={weather} alt='weather' className="img-fluid p-4" />
            </fieldset>
          </div>
      </Content>
  );
}

export default WeatherPage;
