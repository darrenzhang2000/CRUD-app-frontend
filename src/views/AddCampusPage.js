import React, { Component } from 'react'
import AddCampusForm from './AddCampusForm'
import { connect } from 'react-redux';

const ADD_TO_ALL_CAMPUSES = "ADD_TO_ALL_CAMPUSES";

class AddCampusPage extends Component{
    submit = values =>{
        // console.log(values);
        this.props.dispatch({ type: ADD_TO_ALL_CAMPUSES, data: values });
    }
    render(){
        return <AddCampusForm onSubmit={this.submit}/>
    }
}


export default connect()(AddCampusPage);