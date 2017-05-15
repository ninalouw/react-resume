import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import FontIcon from 'material-ui/FontIcon';

const Skills = () => (
  <div className='skills'>
    <div className="skills-content">
      <Row className='page-header'>
        <Col s={2} m={2} l={2} className='page-circle'>
          <h1 className='page-h1'>Skills</h1>
        </Col>
      </Row>
      <Row className='skills-h2-row'>
        <Col s={12} m={6} l={6} >
          <h2 className='skills-h2'>Technical Skills</h2>
        </Col>
        <Col s={12} m={6} l={6} >
          <a href="https://github.com/ninalouw"><button className="github-btn">SEE GITHUB</button></a>
        </Col>
      </Row>

      <Row className="skills-content-row">
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Front End</h5>
            <p>Ruby, JavaScript, HTML5, CSS3, AJAX, jQuery, React, Knockout.js</p>
          </Col>
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Back End</h5>
            <p>Ruby on Rails, Express.js</p>
          </Col>
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Concepts</h5>
            <p>MVC & MVVM Design Patterns, Object-Oriented Programming, Agile/Scrum</p>
          </Col>
      </Row>

      <Row className="skills-content-row">
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Testing</h5>
            <p>RSpec, Jasmine</p>
          </Col>
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Design</h5>
            <p>Photoshop, Sketch, Illustrator, UI/UX Design Concepts, Typography</p>
          </Col>
          <Col s={12} m={4} l={4} >
            <h5 className="skills-h5">Databases</h5>
            <p>PostgreSQL, MySQL, MongoDB, ActiveRecord</p>
          </Col>
      </Row>

    </div>
  </div>

);

export default Skills;
