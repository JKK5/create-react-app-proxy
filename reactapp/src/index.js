import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <input
          type="button"
          value="get data"
          onClick={function () {
            fetch('http://localhost:8000/data.json')
              .then(function (result) {
                return result.json();
              })
              .then(function (json) {
                console.log(json);
              });
          }}
        ></input>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
