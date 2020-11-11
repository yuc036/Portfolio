import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

function Card(props) {
  return(
    <animated.div className="t-card">
      <Link to={props.item.path} target="_blank" rel="noopener noreferrer">
        <Tooltip title={props.item.subTitle}>
          <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        </Tooltip>
      </Link>
      <div className="d-flex justify-content-between flex-wrap t-card-text">
        <Link to={props.item.path} target="_blank" rel="noopener noreferrer" className="t-card-title">{props.item.title}</Link>
        <span className="t-card-tag">{props.item.tag}</span>
      </div>
    </animated.div>
  );
}

export default Card;