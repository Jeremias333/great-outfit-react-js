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

class CardImage extends React.Component{
    render(){
        return(
            <img src={this.props.src} className="card card-image"/>
        );
    }
}

class CardBody extends React.Component{
    render(){
        return(
            <div className="card-body">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

class CardButton extends React.Component{
    render(){
        return(
            <div className="card-footer">
                <a href={this.props.href} className="button">{this.props.title} - <b>R${this.props.price}</b></a>
            </div>
        );
    }
}

export {Card, CardImage, CardBody, CardButton}