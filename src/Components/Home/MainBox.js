import React from 'react';
import { Link } from 'react-router-dom';


export default function MainBox(props) {
    return (
      <div className="first-container">    
          <div className="second-container">
              <h2 className="second-title">{props.title}</h2>
              <Link to={props.link}><p className="explainer-text">{props.text}</p></Link>
          </div>
      </div>
    );
    }