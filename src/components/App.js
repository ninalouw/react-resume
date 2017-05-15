import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';


export default class App extends Component {
  render() {
    return (
    <Router>
      <MuiThemeProvider>
      <div className="App">
          <Header />
          <hr />
          {/* {this.props.children} */}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </div>
      </MuiThemeProvider>
    </Router>
    );
  }
}
