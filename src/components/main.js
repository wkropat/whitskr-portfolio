import React, {useState, useEffect} from 'react';
import Project from './project';
var moment = require('moment'); // require

// Build request URL
const projects = [
  {
    name: 'RecipeBuilder',
    description: 'Get recipes based on ingredients in your kitchen',
    url: "github.com/wkropat",
    img: "../../public/recipeBuilder.jpg"
  },
  {
    name: 'Andromeda',
    description: 'Space Weather Alert App',
    url: "github.com/wkropat",
    img: "../../public/andromeda.jpg"
  },
  {
    name: 'Chess',
    description: 'Live Chess App',
    url: "github.com/wkropat",
    img: "../../public/playChess.jpg"
  },
];
function Main() {
  

    return (
    <div>
      {projects.map((project) => (
        <Project name={project.name} desc={project.description} url={project.url} img={project.img}></Project>
      ))}
    </div>
    );
  }


export default Main;