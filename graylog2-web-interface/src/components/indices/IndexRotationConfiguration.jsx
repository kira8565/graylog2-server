import React from 'react';

import { PluginStore } from 'graylog-web-plugin/plugin';
import { Select } from 'components/common';
import {} from 'components/indices/rotation'; // Load rotation plugin UI plugins from core.

const IndexRotationConfiguration = React.createClass({
  getInitialState() {
    return {selectedStrategy: undefined};
  },

  _onSelect(selection) {
    this.setState({selectedStrategy: selection});
  },
  _getSelectOptions() {
    return PluginStore.exports('indexRotationConfig').map((config) => {
      return {value: config.type, label: config.displayName}
    });
  },
  _getSelectedStrategyConfig(selected) {
    return PluginStore.exports('indexRotationConfig')
      .filter((config) => config.type === selected)
      .map((config) => (<span key={config.type}>{React.createElement(config.component)}</span>));
  },
  render() {
    const configComponents = this._getSelectedStrategyConfig(this.state.selectedStrategy);

    return (
      <span>
        <h3>Index Rotation Configuration</h3>
        <div style={{marginTop: 10}}>
          <p>Please select an index rotation strategy</p>
        </div>
        <div style={{marginTop: 10}}>
          <Select placeholder="Select rotation strategy" options={this._getSelectOptions()} matchProp="value" onValueChange={this._onSelect}/>
        </div>
        <div style={{marginTop: 10}}>
          {configComponents}
        </div>
      </span>
    );
  }
});

export default IndexRotationConfiguration;
