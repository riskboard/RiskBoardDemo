import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import RBPin from './rb-pin.js';
import '../styles/rb-map.scss';

export default class RBMap extends Component {

  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 14.271625,
      longitude: 100.3676,
      zoom: 3
    }
  };

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

  renderAssetsPins(props=this.props) {
    const {assets} = props;
    return assets.map((asset, i) => {
      const markerData = this.getAssetLocationData(asset);
      const { longitude, latitude, assetName, value } = markerData;
      return (
        <Marker key={i} 
          latitude={latitude} longitude={longitude}
          offsetTop={-20} offsetLeft={-10}
          onDragStart={this._onMarkerDragStart}
          onDrag={this._onMarkerDrag}
          onDragEnd={this._onMarkerDragEnd}
        >
          <RBPin size={20} />
        </Marker>
      );
    })
  }

  render() {
    const {assets} = this.props;
    return (
      <div className="rb-map">
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          {
            this.renderAssetsPins(this.props)
          }
        </ReactMapGL>
      </div>
    );
  }
}
