// Project card for portfolio

import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Project(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../public/playChess.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}


export default Project;