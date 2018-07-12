import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns: campaigns };
  }

  render() {
    return (
      <div>
        <h2>Campaigns</h2>
        <p>Campaign count : {this.props.campaigns.length}</p>
        <p>Campaign  : {this.props.campaigns[0]}</p>
      </div>
    );
  }
}

export default CampaignIndex;
