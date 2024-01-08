 import React from "react";
// import {BrowserRouter as Router, Route, Switch} from react-dom ;
import Nav from "./Nav";
import Home from "./Home";
import About from './About';
import Services from './Services';
import Updates from './Updates';
import Contact from './Contact';



const Rea = ()=> {

return (
<Router>

<div>
<Nav/>

<Switch>
    <Route path ="/" exact component ={Home}/>
    <Route path ="/about" exact component ={About}/>
    <Route path ="/services" exact component ={Services}/>
    <Route path ="/updates" exact component ={Updates}/>
    <Route path ="/contact" exact component ={Contact}/>
</Switch>

</div>
</Router>
);
};

export default Rea;
