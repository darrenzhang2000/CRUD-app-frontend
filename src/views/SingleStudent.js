import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const ADD_SINGLE_CAMPUS = "ADD_SINGLE_CAMPUS";

class SingleStudent extends Component{

    showCampusName = () => {
        console.log("campus name", this.props.campusName);
        if(this.props.campusName === "" || this.props.campusName === undefined) {
            return <p>This student is not registered to a campus.</p>
        } else {
            return (<Link to="/campus"
                    onClick= { () =>{
                        let campusOfStudent = this.props.allCampuses.find(campus => campus.name === this.props.campusName);
                        this.props.dispatch({
                            type: ADD_SINGLE_CAMPUS,
                            data: campusOfStudent
                        })  
                    }              
                    } > Campus: {this.props.campusName} </Link>)
        }
    }

    render(){
        return(
            <div>
                <h1>Single Student</h1>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.address}</p>
                <p>GPA: {this.props.gpa}</p>
                { this.showCampusName() }
                
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
