import React, { Component } from 'react'

class SingleStudent extends Component{
    render(){
        return(
            <div>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.image}</p>
                <p>GPA: {this.props.gpa}</p>
            </div>
        );
    }
}

export default SingleStudent;
