import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import RBPin from './rb-pin.js';
import '../styles/rb-map.scss';

class RBMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: 400,
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: props.zoom
      }
    };
  }

  getAssetLocationData(asset) {
    // Just grabbing the first location, will have to revisit this
    // when we have a better sense of our unit of analysis
    const {assetName, value} = asset;
    const locationName = asset.location[0].locationName;
    const {latitude, longitude} = asset.location[0].coordinates[0];
    return {
      assetName,
      latitude,
      longitude,
      locationName
    };
  }

  renderPins(props=this.props) {
    const {assets, stories} = props;
    const markers = [];
    if (assets.length > 0) {
      const assetMarkers = assets.map((asset, i) => {
        const markerData = this.getAssetLocationData(asset);
        const { longitude, latitude, assetName, value } = markerData;
        return (
          <Marker
            key={`a-${i}`}
            latitude={+latitude} longitude={+longitude}
            offsetTop={-20} offsetLeft={-10}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
          <RBPin size={20} />
          </Marker>
        );
      })
      markers.push(assetMarkers);
    }
    if (stories.length > 0) {
      const storyMarkers = stories.map((story, i) => {
        const { long, lat } = story;
        return (
          <Marker
            key={`s-${i}`}
            latitude={+lat} longitude={+long}
            offsetTop={-20} offsetLeft={-10}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            <RBPin size={20} />
          </Marker>
        );
      })
      markers.push(storyMarkers);
    }
    return markers;
  }

  render() {
    const {assets} = this.props;
    return (
      <div className="rb-map">
        <ReactMapGL
          {...this.state.viewport}
          scrollZoom={false}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          {
            this.renderPins(this.props)
          }
        </ReactMapGL>
      </div>
    );
  }
}

RBMap.defaultProps = {
  assets: [],
  stories:[],
  latitude: 13.5605834,
  longitude: 19.927948,
  zoom: 1.56
};

export default RBMap;
