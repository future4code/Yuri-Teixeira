import './App.css';
import React from 'react'
import Main from './components/main'


export default class App extends React.Component {
  state = {
    mainPage: false
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
