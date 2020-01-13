import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const ADD_SINGLE_CAMPUS = "ADD_SINGLE_CAMPUS";

class SingleStudent extends Component{
    render(){
        return(
            <div>
                <h1>Single Student</h1>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.address}</p>
                <p>GPA: {this.props.gpa}</p>
                <Link to="/campus"
                    onClick= { () =>{
                        let campusOfStudent = this.props.allCampuses.find(campus => campus.name === this.props.campusName);
                        // console.log("campusOfStudent", campusOfStudent);
                        this.props.dispatch({
                            type: ADD_SINGLE_CAMPUS,
                            data: campusOfStudent
                        })  
                    }              
                    } 
                >
                    Campus: {this.props.campusName} </Link>
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
        campusName: states.studentState.singleStudent.campusName,

        allCampuses: states.campusState.allCampuses
    }
}

export default connect(mapStateToProps)(SingleStudent);
// export default SingleStudent;
