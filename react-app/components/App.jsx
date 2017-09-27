var ReactDOM = require('react-dom');
var React = require('react');
import { BrowserRouter } from 'react-router-dom';
import { Route, IndexRoute, Switch } from 'react-router-dom';
import Home from './Home';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
