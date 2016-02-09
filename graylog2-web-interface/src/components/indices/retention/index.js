import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';
import DeletionRetentionStrategyConfiguration from './DeletionRetentionStrategyConfiguration';
import ClosingRetentionStrategyConfiguration from './ClosingRetentionStrategyConfiguration';

PluginStore.register(new PluginManifest({}, {
  indexRetentionConfig: [
    {
      type: 'org.graylog2.indexer.retention.strategies.DeletionRetentionStrategy',
      displayName: 'Delete Index',
      component: DeletionRetentionStrategyConfiguration,
    },
    {
      type: 'org.graylog2.indexer.retention.strategies.ClosingRetentionStrategy',
      displayName: 'Close Index',
      component: ClosingRetentionStrategyConfiguration,
    },
  ],
}));
