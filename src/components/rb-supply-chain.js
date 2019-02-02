import React, { Component } from 'react';
import '../styles/rb-supply-chain.scss';

/**
supplyChainData = [
  {
    location:[{
        locationName: "Location",
        coordinates: { lat: 0, long: 0 }
      },..
    ]
    assets: "Asset Name",
    value: "int",
    description: "description text",
  } ...
];
**/

class RBSupplyChain extends Component {
  render() {
    return (
      <div className="rb-supply-chain-wrapper">
        <div className="rb-supply-list">
          <h1>Supply Chain</h1>
        </div>
      </div>
    );
  }
}

export default RBSupplyChain;
