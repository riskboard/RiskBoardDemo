import React, { Component } from 'react';
import '../styles/rb-story-explorer.scss';

class RBStoryExplorer extends Component {
  getStorySelection(stories, selectedLocation) {
    return selectedLocation ?
      stories
        .filter((story) => { return story.locationName.toLowerCase() === selectedLocation; }) 
        .slice(0, 10) :
      stories.slice(0, 10);

  }

  renderFilteredStories(props=this.props) {
    const {stories, selectedLocation} = props;
    const filteredStories = this.getStorySelection(stories, selectedLocation)
    return filteredStories.map((story, i) => {
      return (
        <li key={i}><span className="rb-capitalize">{story.location}</span> Story {i + 1}: {story.text}</li>
      );
    })
  }

  render() {
    const {stories, selectedLocation} = this.props;
    return (
      <div className="rb-story-explorer-wrapper">
        <div className="rb-story-list">
          <h1>Story List</h1>
          <ul>
            {this.renderFilteredStories()}
          </ul>
        </div>
      </div>
    );
  }
}

RBStoryExplorer.defaultProps = {
  stories: [],
  selectedLocation: ''
};

export default RBStoryExplorer;
