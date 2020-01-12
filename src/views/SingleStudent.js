import React, { Component } from 'react'

class SingleStudent extends Component{
    render(){
        return(
            <div>
                <h1>Single Student</h1>
                <p>Student Name: {this.props.name}</p>
                <p>Email: {this.props.email} </p>
                <p>Address: {this.props.image}</p>
                <p>GPA: {this.props.gpa}</p>
            </div>
        );
    }
}

// export default connect(mapStateToProps)(SingleStudent);
export default SingleStudent;
