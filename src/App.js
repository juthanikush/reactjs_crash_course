import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes as Switch } from "react-router-dom";

import About from './About';
import Home from './Home';
//function componets
/*
function App() {
  return (
    <div>
      <h1>Welcome To react</h1>
      <Header />
      <Footer />
    </div>
  );
}


function Header() {
  return (
    <h1>Welcome To Header</h1>
  );
}
function Footer() {
  return (
    <h1>Welcome To footer</h1>
  );
}*/

//class componets
/*class App extends React.Component{
  render()
  {
    return(
      <div>
        <h1>H1</h1>
        {this.props.firstname}
        {this.props.secondname}
      </div>
    );
  }
}*/

//class componets with constructor
/*class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      count:0
    }
  }
  btnClick()
  {
    this.setState({
      count:this.state.count+1
    });
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.btnClick.bind(this)}>Click me</button>
      </div>
    )
  }
}*/
//Router 
class App extends React.Component{
  render()
  {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
          <Switch>
            
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
