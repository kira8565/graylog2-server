// Ensure that the global state is initialized.
if (!document.GRAYLOG_WEB_STATE) {
  document.GRAYLOG_WEB_STATE = new Map();
}

const state = document.GRAYLOG_WEB_STATE;

/**
 * Provides an API to store global state for the web app.
 */
const GraylogWebState = {
  /**
   * Returns the value for the given key.
   * @param key
   * @returns {V} the value for the given key
   */
  get(key) {
    return state.get(key);
  },
  /**
   * Sets the value for the given key. Throws an Error if the key already exists to prevent overwriting state.
   * Use the {@link #remove} function to remove the value first if you really want to overwrite state.
   * @param {V} key
   * @param {V} value
   */
  set(key, value) {
    if (state.has(key)) {
      throw new Error(`Key "${key}" already exists in GRAYLOG_WEB_STATE!`);
    } else {
      state.set(key, value);
    }
  },
  /**
   * Remove the given key from the state.
   * @param {V} key
   */
  remove(key) {
    state.delete(key);
  },
  /**
   * Returns true if a value exists for the given key. It returns false otherwise.
   * @param key
   * @returns {boolean}
   */
  exists(key) {
    return state.has(key);
  }
};

export default GraylogWebState;
