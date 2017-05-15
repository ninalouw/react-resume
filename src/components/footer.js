import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Row, Col} from 'react-materialize';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const Footer = () => (
  <footer className="footer">
    <Row>
        <Col s={3} m={2} l={2} className="footer-elem">
          <FontIcon className="material-icons" color={blue500}>home</FontIcon><p>Get in Touch</p>
        </Col>
        <Col s={3} m={2} l={2} className="footer-elem">
          <FontIcon className="material-icons" color={red500}>phone</FontIcon><p>604 405 6789</p>
        </Col>
        <Col s={3} m={2} l={2} className="footer-elem">
          <a className="footer-a" href="mailto:ninamaelouw@gmail.com"><FontIcon className="material-icons" color={yellow500}>email</FontIcon><p>ninalouw@mac.com</p></a>
        </Col>
        <Col s={3} m={2} l={2} className="footer-elem">
          <a href="https://www.linkedin.com/in/ninamaelouw/">
            <FontAwesome className="fa-icon-footer" name='linkedin' size='2x'/>
          </a>
       </Col>
       <Col s={3} m={2} l={2} className="footer-elem">
         <a href="https://twitter.com/ninamaelouw">
           <FontAwesome className="fa-icon-footer" name='twitter' size='2x'/>
         </a>
      </Col>
      <Col s={3} m={2} l={2} className="footer-elem">
        <a href="https://github.com/ninalouw">
          <FontAwesome className="fa-icon-footer" name='github' size='2x'/>
        </a>
     </Col>
  </Row>
</footer>
);



export default Footer;
