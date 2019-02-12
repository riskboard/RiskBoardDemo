import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/rb-incident-detail-page.scss';

class IncidentDetail extends Component {
  render() {
    const {assets, stories} = this.props;
    return (
      <div className="rb-incident-detail-page rb-page">
        <h1 className="rb-title">Incident Name</h1>
        <Grid fluid>
          <Row>
            <Col lg={5}>
              <div className="rb-incident-section">
                <h1>Map</h1>
              </div>
            </Col>
            <Col lg={7}>
              <div className="rb-incident-section">
                <h1>Stories</h1>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default IncidentDetail;
