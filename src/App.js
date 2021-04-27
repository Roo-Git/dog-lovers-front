import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import User from './containers/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/user" exact component={User}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
