import React from 'react'
import './App.css';
import MainComponent from './Component folder/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './Redux/myStore'

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
