import React, { Component } from 'react'

class AllStudents extends Component{
    render(){
        let allStudentsDisplay = this.props.students.map((student, id)=>
            <div key={id}>
                <p key={id}>{student.name}</p>
            </div>
        )
        return(
            <div>
                <h1>All Students</h1>
                {allStudentsDisplay}
            </div>
        );
    }
}

export default AllStudents;
