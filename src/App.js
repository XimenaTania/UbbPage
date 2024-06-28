
import React from 'react';
import {AppRouters} from "./routers/AppRouters";
import {Provider} from "react-redux";

import store from './app/store'

function App() {
  return (
      <Provider store={store}>
        <AppRouters />
      </Provider>
  );
}

export default App;
