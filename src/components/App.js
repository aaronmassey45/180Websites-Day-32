import React, {Component} from 'react';
import NewNavbar from './newnavbar';
import Button from './button';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NewNavbar/>
        <div className="container">
          <h1 className="text-center">Random Quote Generator</h1>
          <div className="jumbotron text-center">
            <Button />
          </div>
        </div>
      </div>
    );
  }
}
