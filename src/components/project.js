// Project card for portfolio

import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Project(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Link href={props.url}>See it for yourself!</Card.Link>
                <Card.Text>
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}


export default Project;