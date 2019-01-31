import React, { Component } from 'react';
import RBMap from './components/rb-map.js';
import RBSupplyChain from './components/rb-supply-chain.js';
import RBStoryExplorer from './components/rb-story-explorer.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="RBApp">
        <h1 className="rb-title">Risk Board</h1>
        <RBMap />
        <Grid fluid>
          <Row>
            <Col lg={4}>
              <RBSupplyChain/>
            </Col>
            <Col lg={8}>
              <RBStoryExplorer/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
