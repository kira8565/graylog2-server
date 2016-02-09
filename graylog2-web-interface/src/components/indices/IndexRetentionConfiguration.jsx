import React from 'react';

import { PluginStore } from 'graylog-web-plugin/plugin';
import { Select } from 'components/common';
import {} from 'components/indices/retention'; // Load retention plugin UI plugins from core.

const IndexRetentionConfiguration = React.createClass({
  getInitialState() {
    return {selectedRetentionStrategy: undefined};
  },

  _onRetentionSelect(selection) {
    this.setState({selectedRetentionStrategy: selection});
  },
  _getSelectOptions() {
    return PluginStore.exports('indexRetentionConfig').map((config) => {
      return {value: config.type, label: config.displayName}
    });
  },
  _getSelectedRetetionStrategyConfig(selected) {
    return PluginStore.exports('indexRetentionConfig')
      .filter((config) => config.type === selected)
      .map((config) => (<span key={config.type}>{React.createElement(config.component)}</span>));
  },
  render() {
    const configComponents = this._getSelectedRetetionStrategyConfig(this.state.selectedRetentionStrategy);

    return (
      <span>
        <h3>Index Retention Configuration</h3>
        <div style={{marginTop: 10}}>
          <p>Please select an index retention strategy</p>
        </div>
        <div style={{marginTop: 10}}>
          <Select placeholder="Select retention strategy" options={this._getSelectOptions()} matchProp="value" onValueChange={this._onRetentionSelect}/>
        </div>
        <div style={{marginTop: 10}}>
          {configComponents}
        </div>
      </span>
    );
  }
});

export default IndexRetentionConfiguration;
