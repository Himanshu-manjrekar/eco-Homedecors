import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Topbar from './Components/Topbar';
import { Switch, Route, Redirect } from "react-router-dom";
// Files Import
import Products from './Pages/Products';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Topbar />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Products" component={Products}></Route>
      <Route exact path="/Services" component={Services}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Blog" component={Blog}></Route>
      <Redirect to="/" />
    </Switch>
    
      
    </>
  );
}

export default App;
