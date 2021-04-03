import React,{useState} from 'react'
import About from './About';
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'

import { BrowserRouter as Router,
  Switch,
  Route,
  Link}
  from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';




import './App.css';

function App() {
  const [name,setName]=useState("anil") 
    return (
       <div className = "App" >
         <Router>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <Link to="/">NavBar</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">  <Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to="/user">User List</Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to="/create">Create User</Link></Nav.Link>

    </Nav>
    </Navbar>     
    <Switch>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/user">
            <Users />
            </Route>
            <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/create">
            <CreateUser />        
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch>
       
    <h1 > Hello world </h1> 

        {/*<About name={name} />
        <button onClick={()=>{setName ('anil choudry')}}> update the props</button>
         {<Contact /> }
         <Users></Users>
         <CreateUser></CreateUser>*/} 
       </Router>
       </div >
    );
}

export default App;