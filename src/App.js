import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import User from './containers/User/User';
import Choice from './containers/Choice/Choice';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/user" exact component={User}/>
        <Route path="/choice" exact component={Choice}/>        
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
