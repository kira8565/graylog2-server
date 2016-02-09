import React from 'react';
import WebEvents from 'util/WebEvents';

const SizeBasedRotationStrategyConfiguration = React.createClass({
  componentDidMount() {
    WebEvents.subscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  componentWillUnmount() {
    WebEvents.unsubscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  _onSave() {
    console.log(`Save size based rotation strategy config`);
  },

  render() {
    return (
      <div>
        SizeBasedRotationStrategyConfiguration
      </div>
    );
  },
});

export default SizeBasedRotationStrategyConfiguration;
