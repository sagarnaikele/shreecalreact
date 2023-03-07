import "./NavbarStyles.css"
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./Menuitems";

class Navbar extends Component {
    state ={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked});
    }
    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo"> Shree Calibration</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked?"nav-menu     active":"nav-menu"}>
                    {MenuItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={item.url} className={item.clsName}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav >
        )
    }

}
export default Navbar;