import React from 'react';
import WebEvents from 'util/WebEvents';

const MessageCountRotationStrategyConfiguration = React.createClass({
  componentDidMount() {
    WebEvents.subscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  componentWillUnmount() {
    WebEvents.unsubscribe(WebEvents.events.INDEX_SETTINGS_UPDATE, this._onSave);
  },

  _onSave() {
    console.log(`Save message count rotation strategy config`);
  },

  render() {
    return (
      <div>
        MessageCountRotationStrategyConfiguration
      </div>
    );
  },
});

export default MessageCountRotationStrategyConfiguration;
