import React from 'react';
import WebEvents from 'util/WebEvents';

import { Button, Input } from 'react-bootstrap';
import BootstrapModalForm from 'components/bootstrap/BootstrapModalForm';
import { Select } from 'components/common';
import { PluginStore } from 'graylog-web-plugin/plugin';

import IndexRetentionConfiguration from 'components/indices/IndexRetentionConfiguration';
import IndexRotationConfiguration from 'components/indices/IndexRotationConfiguration';

import style from '!style!css!./IndicesConfiguration.css';

const IndicesConfiguration = React.createClass({
  _saveConfiguration() {
    WebEvents.emit(WebEvents.events.INDEX_SETTINGS_UPDATE);
  },

  _openModal() {
    this.refs.indicesConfigurationModal.open();
  },

  render() {
    return (
      <div>
        <h2>Settings</h2>

        <div style={{marginTop: 10}}>

          <dl className={style.deflist}>
            <dt>Setting:</dt>
            <dd>value</dd>
          </dl>
          <hr style={{marginBottom: '5', marginTop: '10'}}/>
          <Button bsStyle='info' bsSize='xs' onClick={() => this._openModal()}>Update configuration</Button>{' '}
        </div>

        <BootstrapModalForm ref='indicesConfigurationModal'
                            title='Update Index Settings'
                            onSubmitForm={this._saveConfiguration}
                            submitButtonText="Save">
          <IndexRotationConfiguration/>
          <hr/>
          <IndexRetentionConfiguration/>
        </BootstrapModalForm>
      </div>
    );
  },
});

export default IndicesConfiguration;
