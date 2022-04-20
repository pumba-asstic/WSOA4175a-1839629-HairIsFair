import './App.css';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import NetArtHair from './Pages/NetArtHair';
import DesignAesth from './Pages/DesignAesth';
import Footer from './Components/footer';


function App(){
  return (
    
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path ='/' component={Home}></Route>
       <Route exact path ='/Blogs' component={Blogs}></Route>
     </Switch>
     <Footer></Footer>
    </div>
  
  )
}

export default App;
