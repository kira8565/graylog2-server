import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';

import MessageCountRotationStrategyConfiguration from './MessageCountRotationStrategyConfiguration';
import SizeBasedRotationStrategyConfiguration from './SizeBasedRotationStrategyConfiguration';
import TimeBasedRotationStrategyConfiguration from './TimeBasedRotationStrategyConfiguration';

PluginStore.register(new PluginManifest({}, {
  indexRotationConfig: [
    {
      type: 'org.graylog2.indexer.rotation.strategies.MessageCountRotationStrategy',
      displayName: 'Index Message Count',
      component: MessageCountRotationStrategyConfiguration,
    },
    {
      type: 'org.graylog2.indexer.rotation.strategies.SizeBasedRotationStrategy',
      displayName: 'Index Size',
      component: SizeBasedRotationStrategyConfiguration,
    },
    {
      type: 'org.graylog2.indexer.rotation.strategies.TimeBasedRotationStrategy',
      displayName: 'Index Time',
      component: TimeBasedRotationStrategyConfiguration,
    },
  ],
}));
