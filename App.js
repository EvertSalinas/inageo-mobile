import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './src/reducers/UserReducer.js';
import InageoApp from './src/InageoApp.js';


// Store
/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatchin an action
 * Reducer - receives the action and modifiers the state to give us a new state
 * - pure functions
 * - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */
const store = createStore(userReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InageoApp />
      </Provider>
    )
  }
}