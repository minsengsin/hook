import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import { Dimmer, Loader, Image, Segment, Input, Icon, Button } from 'semantic-ui-react';
import style from './styles/style.css';
//


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }


  render () {
    return (
      <div className={style.body}>
        <h1 className={style.banner}>Hook</h1>

      </div>
   )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
