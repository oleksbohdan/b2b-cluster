import React from 'react';
import {Provider} from 'react-redux';
import store from "../redux/store";

import Homepage from "../pages/homepage/homepage.component";

function App() {
  return (
      <Provider store={store}>
        <Homepage/>
      </Provider>
  );
}

export default App;
