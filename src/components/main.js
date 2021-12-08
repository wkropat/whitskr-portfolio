import React, { useState, useEffect } from 'react';
import Project from './project';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Build request URL
const projects = [
  {
    name: 'RecipeBuilder',
    description: 'Get recipes based on ingredients in your kitchen',
    url: "https://github.com/RecipeBuilder",
    img: "/recipeBuilder.jpg"
  },
  {
    name: 'Andromeda',
    description: 'Space Weather Alert App',
    url: "https://github.com/lets-play-chess",
    img: "/andromeda.jpg"
  },
  {
    name: 'Chess',
    description: 'Live Chess App',
    url: "https://github.com/Andromeda-App",
    img: "/playChess.jpg"
  },
];
function Main() {


  return (
    <Container className="text-center" fluid>
      <Row>
        <Card>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            A full stack developer in training.
          </Card.Text>
        </Card>
      </Row>
      <br />
      <Row id="portfolio">
        {projects.map((project) => (
          <Col>
            <Project name={project.name} desc={project.description} url={project.url} img={project.img}></Project>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default Main;