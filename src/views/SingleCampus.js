import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const ADD_SINGLE_STUDENT = "ADD_SINGLE_STUDENT";

class SingleCampus extends Component{
    showStudentsOfCampus = () => {
        if(this.props.studentList === undefined) {
            return(<p>This campus does not have any students enrolled.</p>)
        } else {
            let studentList = this.props.studentList.map((student, id) =>(
            <li key={id}>
                <Link key={id} 
                to="/student"
                onClick= { () =>
                    this.props.dispatch({
                        type: ADD_SINGLE_STUDENT,
                        data: student
                    })
                             
                } >{student.name}
                </Link>
            </li>
            ))
            return studentList; 
        }
    }

    render(){
        
        return(
            <div>

                <h1>Single Campus</h1>
                <p>Campus Name: {this.props.name}</p>
                <img src={this.props.image} alt={this.props.image}/>
                <p>Address: {this.props.address}</p>
                <p>description: {this.props.description}</p>
                <ul>
                    <h3>Student List</h3>
                    {this.showStudentsOfCampus()}
                </ul>
            </div>
        );
    }
}
//.studentList[0].name
function mapStateToProps(states){
    console.log("state: ", states.campusState);
    return{
        name: states.campusState.singleCampus.name,
        image: states.campusState.singleCampus.image,
        address: states.campusState.singleCampus.address,
        description: states.campusState.singleCampus.description,
        studentList: states.campusState.singleCampus.studentList
    }
}

export default connect(mapStateToProps)(SingleCampus);
// export default SingleCampus;
