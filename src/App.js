import React, { Component } from 'react';
import RBMap from './components/rb-map.js';
import RBSupplyChain from './components/rb-supply-chain.js';
import RBStoryExplorer from './components/rb-story-explorer.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import supplyChainData from './data/supply-chain-data.json';
import storiesData from './data/stories.json';
import './App.scss';

class App extends Component {
  render() {
    const {assets} = supplyChainData;
    const {stories} = storiesData;
    console.log(supplyChainData);
    return (
      <div className="RBApp">
        <h1 className="rb-title">Risk Board</h1>
        <RBMap assets={assets}/>
        <Grid fluid>
          <Row>
            <Col lg={4}>
              <RBSupplyChain assets={assets} />
            </Col>
            <Col lg={8}>
              <RBStoryExplorer stories={stories} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
