import React, { Component } from 'react'
import AddCampusForm from '/views/AddCampusForm'

class AddCampusPage extends Component{
    submit = values =>{
        console.log(values);
    }
    render(){
        return <AddCampusForm onSubmit={this.submit}/>
    }
}

export default AddCampusPage;