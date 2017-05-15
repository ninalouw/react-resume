import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Avatar from 'material-ui/Avatar';

const About = () => (
  <div className='about'>
    <Row className='skills-header'>
      <Col s={2} m={2} l={2} className='skills-circle'>
        <h1 className='skills-h1'>About</h1>
      </Col>
    </Row>

    <Row className='about-row-1'>
      <Col s={12} m={12} l={12}>
        <Avatar
            className="about-avatar"
            src='https://avatars1.githubusercontent.com/u/17684394?v=3&amp;s=460'
            size={200}
            style={{margin:15, marginLeft:40, border: 0}} />
      </Col>
    </Row>
    <Row>
      <Col s={12} m={4} l={4} className='about-para'>
        <h3 className="about-para-h3">About Me</h3>
        <p>Graduate of <a className="para-a" href='https://codecore.ca/'>CodeCore Developer Bootcamp</a> and <a className="para-a" href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'>Udacity Front-End Nanodegree</a>, I am a Ruby on Rails and Front-End Javascript developer.</p>
        <p> I am currently honing my skills in React while learning graphic and UI/UX design at <a className='para-a' href='https://www.vanarts.com'> Vanarts</a>.</p>
      </Col>
      <Col s={12} m={4} l={4} className='about-para'>
        <h3 className="about-para-h3">Coding</h3>
        <p>I have great appreciation for the wonders of Ruby on Rails, as well as the elegant front-end solutions of React.</p>
        <p>I am currently building a web app with Rails and React with Redux.</p>
        <p>I am diving deeper into the mysteries of Javascript with <a className="para-a" href='https://www.udemy.com/understand-javascript/learn/v4/overview'>‘Javascript:The Weird Parts’</a> and plan next to tackle Node.js. </p>
      </Col>
      <Col s={12} m={4} l={4} className='about-para'>
        <h3 className="about-para-h3">Background</h3>
        <p> I have a BA and Masters in English Literature, specialising in Victorian literature.</p>
        <p>While I love a fine piece of literature, literary academia does not have the creation aspect and cold-hard efficiency that I enjoy of programming.</p>
      </Col>
    </Row>
    <Row className="education-row">
      <Col s={12} m={3} l={3} className='coding-rectangle'>
        <h2 className="education-h2">Coding</h2>
      </Col>
      <Col s={12} m={6} l={6}>
        <h3 className="education-h3">Web Development and Interactive Design Diploma</h3>
        <p className="education-para"><a className="para-a" href='https://www.vanarts.com'>Vancouver Institute of Media Arts</a>, 2017-2018</p>
        <h3 className="education-h3">Web Development Certificate</h3>
        <p className="education-para"><a className="para-a" href='https://codecore.ca/'>CodeCore Developer Bootcamp</a>, 2016</p>
        <h3 className="education-h3">Front-End Developer Nanodegree</h3>
        <p className="education-para"><a className="para-a" href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'>Udacity FEND Program</a>, 2016-2017</p>
      </Col>
    </Row>
    <Row className="education-row">
      <Col s={12} m={3} l={3} className='coding-rectangle'>
        <h2 className="education-h2">College</h2>
      </Col>
      <Col s={12} m={6} l={6} className=''>
        <h3 className="education-h3" >Masters in English Literature</h3>
        <p className="education-para"><a className="para-a" href='http://www.english.ox.ac.uk/masters-programmes'>University of Oxford</a>, 2015</p>
        <h3 className="education-h3" >BA Honours in English</h3>
        <p className="education-para"><a className="para-a" href='http://www0.sun.ac.za/pgstudies/postgraduate-programmes/faculty-of-arts-and-social-sciences-1/department-of-english/bahons-english-studies.html'>University of Stellenbosch</a>, 2013</p>
        <h3 className="education-h3" >BA Humanities</h3>
        <p className="education-para"><a className="para-a" href='http://www.sun.ac.za/english/faculty/arts'>University of Stellenbosch</a>, 2012</p>
      </Col>
    </Row>
  </div>
);

export default About;
