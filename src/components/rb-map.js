import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import RBPin from './rb-pin.js';
import '../styles/rb-map.scss';

export default class RBMap extends Component {

  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 33.7577,
      longitude: -7.3676,
      zoom: 1.75
    },
    supplyPins: [
      {
        latitude: 31.774878,
        longitude: -7.349492
      },
      {
        latitude: 27.809928,
        longitude: 30.631582
      },
      {
        latitude: 7.852499,
        longitude: -69.596252
      },
      {
        latitude: 13.378932,
        longitude: -13.679671
      }
    ]
  };

  render() {
    return (
      <div className="rb-map">
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          {
            this.state.supplyPins.map((pin) => {
              return (
                <Marker {...pin}
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
        </ReactMapGL>
      </div>
    );
  }
}
