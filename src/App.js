import React, { Component } from 'react';
import RBHeader from './components/rb-header.js';
import RiskHome from './partials/risk-home.js';
import IncidentDetail from './partials/incident-detail.js';
import supplyChainData from './data/supply-chain-data.json';
import storiesData from './data/stories.json';
import { transformStoryData } from './lib/helpers.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'normalize.css';
import './App.scss';


const {assets} = supplyChainData;
const stories = transformStoryData(storiesData);

class App extends Component {
  render() {
    return (
      <Router basename="/RiskBoardDemo">
        <div className="RBApp rb-container">
          <RBHeader />
          <Grid fluid>
            <Row>
              <Col className="rb-no-margin-col" lg={2}>
                <div className="rb-side-section">
                  <ul className="rb-sidebar-menu">
                    <li><a href="#"><span className="fa fa-home"/>Analytics</a></li>
                    <li><a href="#"><span className="fa fa-users"/>Profile</a></li>
                    <li><a href="#"><span className="fa fa-cog"/>Settings</a></li>
                  </ul>
                </div>
              </Col>
              <Col className="rb-no-margin-col" lg={10}>
                <div className="rb-main-section">
                  <Route exact path="/" render={(props)=> <RiskHome assets={assets} stories={stories} />} />
                  <Route path="/incidents/:id" component={IncidentDetail} />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
