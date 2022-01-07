import React from "react";
import "./components.css";

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                {this.props.children}
            </div>
        );
    }
}

class NavbarItem extends React.Component{
    render(){
        return(
            <a href={this.props.href} className="navbar-item">
                {this.props.title}
            </a>
        );
    }
}

export {Navbar, NavbarItem} //exportando multiplas classe