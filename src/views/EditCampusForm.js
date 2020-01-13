import React, { Component } from 'react';
import { connect } from 'react-redux';

const EDIT_SINGLE_CAMPUS = "EDIT_SINGLE_CAMPUS";

class EditCampusForm extends Component{
    render(){
        return(
            <div>
                <h1>Edit Form</h1>
                <form>
                    <label htmlFor="campusName" >Campus Name: </label>
                    <input type="text" name="name" value={this.props.name} onChange={(this.onChangeHandler)}/><br/>
                    <label for="campusImage" >Campus Image: </label>
                    <input type="text" name="image" value={this.props.image} onChange={this.onChangeHandler}/><br/>
                    <label for="campusAddress">Campus Address: </label>
                    <input type="text" name="address" value={this.props.address} onChange={this.onChangeHandler}/><br/>
                    <label for="campusDescription">Campus Description: </label>
                    <input type="text" name="description" value={this.props.description} onChange={this.onChangeHandler}/><br/>
                    <br/>
                    <input type="submit" value="Submit" 
                        // onSubmit={
                        // () => this.props.dispatch({
                        //     type: EditSingleCampus,
                        //     data: 
                        //     })
                        //  }
                    />
                </form>
            </div>
        )
    }
}

    function mapStateToProps(states){
        // console.log("state: ", states.campusState.singleCampus.studentList[0].name);
        return{
            name: states.campusState.singleCampus.name,
            image: states.campusState.singleCampus.image,
            address: states.campusState.singleCampus.address,
            description: states.campusState.singleCampus.description,
            studentList: states.campusState.singleCampus.studentList
        }
}


export default connect(mapStateToProps)(EditCampusForm);    