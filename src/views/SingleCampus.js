import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter, Redirect } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import store from '../index';


const ADD_SINGLE_STUDENT = "ADD_SINGLE_STUDENT";

// onClick={() => dispatch( //onClick should be in containers
//     {
//         type: ADD_SINGLE_STUDENT,
//         data: student
//     })}

// function navigateToStudent(student){
//     this.props.dispatch({
//         type: ADD_SINGLE_STUDENT,
//         data: student
//     })
// }

const ADD_SINGLE_CAMPUS = "ADD_SINGLE_CAMPUS";

class SingleCampus extends Component{
    constructor(){
        super();
    }
    render(){
        // console.log("this.props", this.props); //to test route with params /:id
        let studentList = this.props.studentList.map((student, id) =>
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
                {/* {console.log(store.getState())}       */}
            </li>
        )
        // console.log("student List", studentList);
        return(
            <div>

                <h1>Single Campus</h1>
                <p>Campus Name: {this.props.name}</p>
                <img src={this.props.image} alt={this.props.image}/>
                <p>Address: {this.props.address}</p>
                <p>description: {this.props.description}</p>
                <ul>
                    <h3>Student List</h3>
                    {studentList}
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
