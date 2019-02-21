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
                      <div className="rb-incident-text"><strong>Summary:</strong><br/>{mainStory.text}</div>
                    </div>
                    <div className="rb-past-incident">
                      <div className="rb-incident-text"><strong>Past Instances:</strong><br/>Thai labor disputes was previously reported on July 25, July 11, and July 5 in local Thai media relating to bonded labor. Those incidences referred to bonded labor. Prior instances of labor abuses in the Thai fishing industry were reported by the Guardian newspaper in the UK.</div>
                    </div>
                  </div>
                </Row>
                <Row>
                  <Col lg={7}>
                    <div className="rb-risk-box">
                      <Row>
                          <Col lg={3}><div className="rb-red-box">High</div></Col>
                          <Col lg={9}>
                            <p>Risk of national and international Media:</p>
                            <p>Such stories have been covered by international media in 2 years</p>
                          </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <ul className="rb-recent-stories">
                      <b>Recent Stories</b>
                      <li><a href="#">25 workers rescued from a camp in Benjina</a></li>
                      <li><a href="#">25 workers rescued from a camp in Benjina</a></li>
                      <li><a href="#">25 workers rescued from a camp in Benjina</a></li>
                    </ul>
                  </Col>
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
