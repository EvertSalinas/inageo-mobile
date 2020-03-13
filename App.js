import 'react-native-gesture-handler';
import React from 'react';
// import store from '.app/store';
// import { Provider } from 'react-redux';

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

export default class App extends React.Component {
  render() {
    return (
      <InageoApp />
    )
  }
}