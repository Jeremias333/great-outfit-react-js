import React from "react";

class Logo extends React.Component{
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
        );
    }
}

export {Logo}