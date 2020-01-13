import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddStudentForm from '../views/AddStudentForm';

const ADD_TO_ALL_STUDENTS = "ADD_TO_ALL_STUDENTS";

class AddStudentPage extends Component{
    submit = values =>{
        console.log(values);
        this.props.dispatch({ type: ADD_TO_ALL_STUDENTS, data: values });
    }
    render(){
        return <AddStudentForm onSubmit={this.submit}/> 
    }
}


export default connect()(AddStudentPage);