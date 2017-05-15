import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import pet from '../images/gridlist/FindMyPet.jpg';
// import food from '../images/gridlist/FoodExplorer.jpg';
// import frogger from '../images/gridlist/Frogger.jpg';
// import goal from '../images/gridlist/goal.jpg';
import {Row, Col} from 'react-materialize';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    // img: frogger,
    title: 'Frogger Arcade Game',
    subtitle: 'Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra.',
    author: 'Nina Louw'
  },
  {
    // img: goal,
    title: 'Goal Tracker',
    subtitle: 'Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra.',
    author: 'Nina Louw'
  },
  {
    // img: pet,
    title: 'Find My Pet Group Project',
    subtitle: 'Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra.',
    author: 'Nina Louw'
  },
  {
    // img: food,
    title: 'Food Explorer',
    subtitle: 'Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra.',
    author: 'Nina Louw'
  }
];

const Projects = () => (
  <div className='projects'>
    <Row className='page-header'>
      <Col s={2} m={2} l={2} className='page-circle'>
        <h1 className='page-h1'>Projects</h1>
      </Col>
    </Row>

    <div style={styles.root}>
      <GridList
        cols={2}
        cellHeight={200}
        padding={1}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            // key={tile.img}
            title={tile.title}
            subtitle={tile.subtitle}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            actionPosition="left"
            titlePosition="top"
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
            containerElement={tile.containerElement}
          >
            {/* <img src={tile.img} /> */}
          </GridTile>
        ))}
      </GridList>
    </div>
</div>

);

export default Projects;
