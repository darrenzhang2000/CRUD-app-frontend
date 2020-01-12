import React, { Component } from 'react'

class SingleCampus extends Component{
    render(){
        return(
            <div>
                <p>Campus Name: {this.props.name}</p>
                <img src={this.props.image}/>
                <p>Address: {this.props.address}</p>
                <p>description: {this.props.description}</p>
            </div>
        );
    }
}

export default SingleCampus;
