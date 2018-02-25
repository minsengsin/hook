import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import { Dimmer, Loader, Image, Segment, Input } from 'semantic-ui-react';
import style from '../styles/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }


  render () {
    return (
      <div>
        <h1>Hook</h1>

      </div>
   )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
