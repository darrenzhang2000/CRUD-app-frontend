import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class SingleStudent extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/campuses">All Campuses</Link>
                    </li>
                    <li>
                    <Link to="/students">All Students</Link>
                    </li>
                    <li>
                    <Link to="/campus">Single Campus</Link>
                    </li>
                    <li>
                    <Link to="/student">Single Student</Link>
                    </li>
                </ul>
                <h1>Single Student</h1>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.address}</p>
                <p>GPA: {this.props.gpa}</p>
                <p>Campus: {this.props.campusName} </p>
            </div>
        );
    }
}

function mapStateToProps(states){
    return{
        name: states.studentState.singleStudent.name,
        email: states.studentState.singleStudent.email,
        address: states.studentState.singleStudent.address,
        gpa: states.studentState.singleStudent.gpa,
        campusName: states.studentState.singleStudent.campusName
    }
}

export default connect(mapStateToProps)(SingleStudent);
// export default SingleStudent;
