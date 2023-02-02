// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greetings';
import store from './redux/store';

// function App() {
//   return (
//   <h1>
//     Hello World! Sonick
//   </h1>);
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'),
// );


function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path = "/" element = { <Greeting /> } />
        </Routes>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
