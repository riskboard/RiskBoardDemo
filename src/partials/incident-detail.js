import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SharedStoriesConsumer } from '../contexts/stories-context.js';
import RBMap from '../components/rb-map.js';
import '../styles/rb-incident-detail-page.scss';
import RBLineChart from '../components/rb-line-chart.js';
import LOCAL_COUNTS from '../data/kerala-drought-india-counts.json';
import US_COUNTS from '../data/kerala-drought-us-counts.json';
import UK_COUNTS from '../data/kerala-drought-uk-counts.json';
import { groupDataByMonth } from '../lib/helpers.js';
import queryString from 'query-string';

// const localData = LOCAL_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
// const usData = US_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
// const ukData = UK_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
// const groupedLocalData = groupDataByMonth(localData);
// const groupedUSData = groupDataByMonth(usData);
// const groupedUKData = groupDataByMonth(ukData);
// const chartData = [
//   { name: 'India News Stories', data: groupedLocalData },
//   { name: 'US News Stories', data: groupedUSData },
//   { name: 'UK News Stories', data: groupedUKData }
// ];
const localData = LOCAL_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
const usData = US_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
const ukData = UK_COUNTS.results.counts.map((count) => { return [count.date, count.count ] });
const groupedLocalData = groupDataByMonth(localData);
const groupedUSData = groupDataByMonth(usData);
const groupedUKData = groupDataByMonth(ukData);
const chartData = [
  { name: 'India News Stories', data: groupedLocalData },
  { name: 'US News Stories', data: groupedUSData },
  { name: 'UK News Stories', data: groupedUKData }
];


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
              <h1 className="rb-page-title">Kerala Drought, Water, Negative -3, 2 weeks</h1>
              <Grid fluid>
                <Row>
                  <div className="rb-section">
                    <RBMap longitude={+mainStory.long} latitude={+mainStory.lat} zoom={4} stories={otherStories}/>
                  </div>
                </Row>
                <Row className="white">
                  <div className="rb-section">
                    <h2 className="rb-section-title">Incident Analysis</h2>
                    <RBLineChart data={chartData} />
                  </div>
                </Row>
                <Row className="white">
                  <div className="rb-section">
                    <div className="rb-incident-information">
                      <div className="rb-incident-text"><strong>Summary:</strong><br/>{mainStory.text}</div>
                    </div>
                    <div className="rb-past-incident">
                      <div className="rb-incident-text">
                        <strong>Past Instances:</strong><br/>
                        Droughts in Kerala have been reported in February 25, August 11, and July 5.
                      </div>
                    </div>
                  </div>
                </Row>
                <Row className="white">
                  <div className="rb-section">
                    <div className="rb-key-actors">
                      <strong>Key Actors:</strong><br/>
                      <ul>
                        <li><a href="#">Kerala Disaster Management Authority</a></li>
                        <li><a href="#">El Nino</a></li>
                      </ul>
                    </div>
                  </div>  
                </Row>
                <Row className="white">
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
                    <ul className="rb-related-stories">
                      <b>Recent Stories</b>
                      <li><a href="#">Twitter trend in India: #kerala #drought</a></li>
                      <li><a href="#">CM Pinarayi Vijayan to launch water campaign today</a></li>
                      <li><a href="#">Kerala: After the Deluge, a Drought in the Works</a></li>
                    </ul>
                  </Col>
                </Row>
                <Row className="white">
                  <Col lg={7}>
                    <Row>
                      <Col lg={3} className="rb-index-wrapper">
                        <div className="rb-index-value">High Risk</div>
                        <div className="rb-index-name">Trafficking Index</div>
                      </Col>
                      <Col lg={3} className="rb-index-wrapper">
                        <div className="rb-index-value">81th</div>
                        <div className="rb-index-name">Corruption Index</div>
                      </Col>
                      <Col lg={3} className="rb-index-wrapper">
                        <div className="rb-index-value">85th</div>
                        <div className="rb-index-name">Global Rights Index (of 100)</div>
                      </Col>
                      <Col lg={3} className="rb-index-wrapper">
                        <div className="rb-index-value">77th</div>
                        <div className="rb-index-name">Ease of doing business (of 100)</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={5}>
                    <ul className="rb-related-stories">
                      <b>Related Stories</b>
                      <li><a href="#">People Power Shut Coke Down In Plachimada, But Wells Are Still Dry</a></li>
                      <li><a href="#">Coca-Cola Closes Plant in India</a></li>
                      <li><a href="#">Suicides of Nearly 60,000 farmers linked to climate change,study claims</a></li>
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
