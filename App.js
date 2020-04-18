import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './src/reducers/UserReducer.js';
import InageoApp from './src/InageoApp.js';

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