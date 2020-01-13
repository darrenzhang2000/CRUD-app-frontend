import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StaticRouter, Redirect } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'

let AddStudentForm = props => {
    const { handleSubmit } = props
    return <div>
        {/* //navbar */}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="gpa">GPA</label>
                <Field name="gpa" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Field name="address" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}

AddStudentForm = reduxForm({
    form: 'addstudent'
})(AddStudentForm)

export default AddStudentForm;