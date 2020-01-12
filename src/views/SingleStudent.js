import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class SingleStudent extends Component{
    render(){
        return(
            <div>
                <h1>Single Student</h1>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.image}</p>
                <p>GPA: {this.props.gpa}</p>
                <p>Campus: {this.props.campusName} </p>
            </div>
        );
    }
}

function mapStateToProps(states){
    return{
        campusName: states.studentState.singleStudent.campusName
    }
}

export default connect(mapStateToProps)(SingleStudent);
// export default SingleStudent;
