import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SharedStoriesConsumer } from '../contexts/stories-context.js';
import RBMap from '../components/rb-map.js';
import '../styles/rb-incident-detail-page.scss';
import queryString from 'query-string';

class IncidentDetail extends Component {

  render() {
    const {location} = this.props;
    const storyId = queryString.parse(location.search).incident;
    return (
      <SharedStoriesConsumer>
      {
        ({getStoryDetail, getStoriesForSameLocation}) => {
          const mainStory = getStoryDetail(storyId);
          const otherStories = getStoriesForSameLocation(mainStory.location);
          return (
            <div className="rb-incident-detail-page rb-page">
              <h1 className="rb-page-title">Indident Risk Analysis</h1>
              <Grid fluid>
                <Row>
                  <div className="rb-section">
                    <RBMap longitude={+mainStory.long} latitude={+mainStory.lat} zoom={4} stories={otherStories}/>
                  </div>
                </Row>
                <Row>
                  <div className="rb-section white">
                    <div className="rb-incident-information">
                      <div className="rb-incident-text"><strong>Summary:</strong> {mainStory.text}</div>
                    </div>
                  </div>
                </Row>
              </Grid>
            </div>
          )
        }
      }
      </SharedStoriesConsumer>
    );
  }
}

export default IncidentDetail;
