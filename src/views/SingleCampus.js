import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class SingleCampus extends Component{
    render(){
        let studentList = this.props.studentList.map((student, id) =>
            <li key={id}>{student.name}</li>
        )
        console.log("student List", studentList);
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

function mapStateToProps(states){
    // console.log("state: ", states.campusState.singleCampus.studentList[0].name);
    return{
        studentList: states.campusState.singleCampus.studentList
    }
}

export default connect(mapStateToProps)(SingleCampus);
// export default SingleCampus;
