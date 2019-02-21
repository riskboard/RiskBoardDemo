import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SharedStoriesConsumer } from '../contexts/stories-context.js';
import RBMap from '../components/rb-map.js';
import '../styles/rb-incident-detail-page.scss';
import RBLineChart from '../components/rb-line-chart.js';
import THAI_LABOR_COUNTS from '../data/thai-labor-counts.json';
import { groupDataByWeek } from '../lib/helpers.js';
import queryString from 'query-string';

const data = THAI_LABOR_COUNTS.results.counts.map((count) => { return [count.date, count.total_count ] });
const groupedData = groupDataByWeek(data);

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
              <h1 className="rb-page-title">Thai Labor Dispute, Labor, Negative -3, 2 weeks</h1>
              <Grid fluid>
                <Row>
                  <div className="rb-section">
                    <RBMap longitude={+mainStory.long} latitude={+mainStory.lat} zoom={4} stories={otherStories}/>
                  </div>
                </Row>
                <Row>
                  <div className="rb-section white">
                    <h2 className="rb-section-title">Incident Analysis</h2>
                    <RBLineChart data={groupedData} />
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
