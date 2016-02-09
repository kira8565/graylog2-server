import React from 'react';
import WebEvents from 'util/WebEvents';

const ClosingRetentionStrategyConfiguration = React.createClass({
  componentDidMount() {
    WebEvents.subscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  componentWillUnmount() {
    WebEvents.unsubscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  _onSave() {
    console.log(`Save closing retention strategy config`);
  },

  render() {
    return (
      <div>
        ClosingRetentionStrategyConfiguration
      </div>
    );
  },
});

export default ClosingRetentionStrategyConfiguration;
