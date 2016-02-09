import EventEmitter from 'eventemitter3';
import state from 'util/GraylogWebState';

// Store a EventEmitter instance in the global state so plugins can see it.
if (!state.exists('eventEmitter')) {
  state.set('eventEmitter', new EventEmitter());
}

const eventEmitter = state.get('eventEmitter');

/**
 * Provides an implementation independent event bus API for the web app.
 */
const WebEvents = {
  /**
   * Emits a new event for the given event name with an optional payload.
   * @param {string} eventName
   * @param {?object} payload
   */
  emit(eventName, payload) {
    eventEmitter.emit(eventName, payload);
  },
  /**
   * Subscribes the given callback to the given event name.
   * @param {string} eventName the name of the event
   * @param {WebEvents~eventCallback} callback the event callback
   */
  subscribe(eventName, callback) {
    eventEmitter.on(eventName, callback);
  },
  /**
   * Unsubscribes the given callback from the given event name.
   * @param {string} eventName
   * @param {WebEvents~eventCallback} callback the event callback
   */
  unsubscribe(eventName, callback) {
    eventEmitter.removeListener(eventName, callback);
  },

  events: {
    INDEX_SETTINGS_UPDATE: 'index-settings:update',
  },
};

/**
 * @callback WebEvents~eventCallback
 * @param {object} payload the event payload
 */

export default WebEvents;
