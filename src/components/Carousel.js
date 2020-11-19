import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import redesign from '../assets/images/redesign.png';
import bart from '../assets/images/bart.png';
import shuttle from '../assets/images/shuttle.png';
import brand from '../assets/images/brand.png';
import mood from '../assets/images/mood.png';
import weather from '../assets/images/weather.png';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Macy\'s Homepage Redesign',
          subTitle: 'Redesigning Macy\'s Homepage',
          tag: 'Webpage',
          imgSrc: redesign,
          path: '/macys-homepage-redesign',
          selected: false
        },
        {
          id: 1,
          title: 'Bart Better',
          subTitle: 'Android App for BART Real-Time Tracking',
          tag: 'Android App',
          imgSrc: bart,
          path: '/bart-better',
          selected: false
        },
        {
          id: 2,
          title: 'UCSD Shuttle Tracker',
          subTitle: 'Android App to track UCSD Shuttles',
          tag: 'Android App',
          imgSrc: shuttle,
          path: '/ucsd-shuttle-tracker',
          selected: false
        },
        {
          id: 3,
          title: 'Macy\'s Profile Building',
          subTitle: 'Macy\'s profile building feature to select favorite brands',
          tag: 'Webpage',
          imgSrc: brand,
          path: '/macys-profile-building',
          selected: false
        },
        {
          id: 4,
          title: 'Mood',
          subTitle: 'Mobile App to record daily mood',
          tag: 'Mobile App',
          imgSrc: mood,
          path: '/mood',
          selected: false
        },
        {
          id: 5,
          title: 'Weather',
          subTitle: 'Webpage to check weather',
          tag: 'Webpage',
          imgSrc: weather,
          path: '/weather',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container>
        <div style={{width: "300px", fontFamily: "fantasy", fontSize: "18px"}}>
          ✮ Jump to my <a href="https://github.com/yuc036" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a> repository
        </div>
        <fieldset className="border mt-4">
          <legend className="text-center font-italic" style={{width: "300px", fontFamily: "fantasy", fontSize: "20px"}}>Checkout my projects below</legend>
          <Row className="justify-content-around px-5">
            {this.makeItems(this.state.items)}
          </Row>
        </fieldset>
      </Container>
    );
  }
}

export default Carousel;
