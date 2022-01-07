import React from "react";
import "./components.css";

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

export {Card}