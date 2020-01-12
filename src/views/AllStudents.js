import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class AllStudents extends Component{
    render(){
        let allStudentsDisplay = this.props.students.map((student, id)=>
            <div key={id}>
                <p key={id}>Student {id} Name: {student.name}</p>
            </div>
        )
        return(
            <div>
                {/* //navbar */}
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
                <h1>All Students</h1>
                {allStudentsDisplay}
            </div>
        );
    }
}

function mapStateToProps(states){
    return{
        students: states.studentState.allStudents
    }
}

export default connect(mapStateToProps)(AllStudents);
