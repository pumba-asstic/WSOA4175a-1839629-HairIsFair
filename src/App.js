import './App.css';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';


function App(){
  return (
    
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path ='/' component={Home}></Route>
     </Switch>
    </div>
  
  );
}

export default App;
