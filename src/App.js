import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
function App() {
  return (
    <div>
     
<BrowserRouter>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/rooms" component={Rooms}/>
<Route exact path="/rooms/:id" component={SingleRoom}/>
<Route component={Error}/>
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
