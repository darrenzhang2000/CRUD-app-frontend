import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const ADD_SINGLE_STUDENT = "ADD_SINGLE_STUDENT";

class AllStudents extends Component{
    render(){
        let allStudentsDisplay = this.props.students.map((student, id)=>
            <div key={id}>
                <li>
                    <Link key={id} onClick={() => this.props.dispatch({ type: ADD_SINGLE_STUDENT, data: student })} to="/student">
                        {student.name}
                    </Link>
                </li>
            </div>
        )
        return(
            <div>
                <h1>All Students</h1>
                <ul>
                    {allStudentsDisplay}
                </ul>
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
