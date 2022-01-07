import React from "react";
import "./components.css";

class CardContainer extends React.Component{
    render(){
        return (
            <div className="card-container">
                {this.props.children}
            </div>
        );
    }
}

export {CardContainer}