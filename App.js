import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './App/Navigator/Navigation';
import store from './App/Store/index';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
