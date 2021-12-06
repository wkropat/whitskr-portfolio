import React, {useState, useEffect} from 'react';
import Project from './project';
import {Container, Row, Col }from 'react-bootstrap';

// Build request URL
const projects = [
  {
    name: 'RecipeBuilder',
    description: 'Get recipes based on ingredients in your kitchen',
    url: "github.com/wkropat",
    img: "../assets/recipeBuilder.jpg"
  },
  {
    name: 'Andromeda',
    description: 'Space Weather Alert App',
    url: "github.com/wkropat",
    img: "../assets/andromeda.jpg"
  },
  {
    name: 'Chess',
    description: 'Live Chess App',
    url: "github.com/wkropat",
    img: "../assets/playChess.jpg"
  },
];
function Main() {
  

    return (
    <Container className="text-center" fluid>
      <Row>
{projects.map((project) => (
        <Project name={project.name} desc={project.description} url={project.url} img={project.img}></Project>
      ))}
      </Row>
    </Container>
    );
  }


export default Main;