import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Owner from './containers/Owner/Owner';
import Choice from './containers/Choice/Choice';
import Sitter from './containers/Sitter/Sitter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/owner" exact component={Owner}/>
        <Route path="/choice" exact component={Choice}/>
        <Route path="/sitter" exact component={Sitter}/>        
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
