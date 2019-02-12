import React, { Component } from 'react';
import RBMap from '../components/rb-map.js';
import RBSupplyChain from '../components/rb-supply-chain.js';
import RBStoryExplorer from '../components/rb-story-explorer.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/risk-home.scss';

class RiskHome extends Component {
  render() {
    const {assets, stories} = this.props;
    return (
      <div className="rb-home-page rb-page">
        <h1 className="rb-page-title">Operations Dashboard</h1>
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

RiskHome.defaultProps = {
  assets: [],
  stories: []
};

export default RiskHome;
