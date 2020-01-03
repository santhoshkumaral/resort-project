import React,{Component} from 'react';
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'
class Navbar extends Component{
constructor(){
    super();
    this.state = {
        isOpen : false
    }
}
showNav = ()=>{
    this.setState({
        isOpen : !this.state.isOpen
    })
}
render(){
    return (
        <div className="navbar">
<div className="nav-center">
    <div className="nav-header">
<Link to="/"><img src={logo}  height="50" /></Link>
<button type="button" onClick={this.showNav} className="nav-btn">
<FaAlignRight className="nav-icon"/>
</button>
    </div>
    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
        <li>
<Link to="/">Home</Link>
        </li>
        <li>
<Link to="/rooms">Rooms</Link>
        </li>
    </ul>
</div>
        </div>
    )
}



}

export default Navbar;