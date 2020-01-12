import React, { Component } from 'react'

class SingleCampus extends Component{
    render(){
        return(
            <div>
                <h1>Single Campus</h1>
                <p>Campus Name: {this.props.name}</p>
                <img src={this.props.image} alt={this.props.image}/>
                <p>Address: {this.props.address}</p>
                <p>description: {this.props.description}</p>
            </div>
        );
    }
}

export default SingleCampus;
