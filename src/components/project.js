// Project card for portfolio

import React from 'react';



function Project(props) {

    return (
        <div className="card">
            <a href="" ><h3 className="cardTitle">{props.title}</h3></a>
            <img src="" className="cardImage"/>
            <p className="cardDesc">{props.description}</p>
        </div>
    );
  }


export default Project;