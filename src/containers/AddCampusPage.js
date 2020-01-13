import React, { Component } from 'react'
import AddCampusForm from ' /views/AddCampusForm'

class AddCampusPage extends Component{
    submit = values =>{
        // console.log(values);
        this.props.dispatch({
            type: ADD_TO,
            data: campusOfStudent
        })  
    }
    render(){
        return <AddCampusForm onSubmit={this.submit}/>
    }
}

export default AddCampusPage;