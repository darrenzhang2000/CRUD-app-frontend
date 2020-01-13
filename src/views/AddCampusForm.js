import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StaticRouter, Redirect } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'

let AddCampusForm = props => {
    const { handleSubmit } = props
    return <div>
        {/* //navbar */}
            <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/campuses">All Campuses</Link>
            </li>
            <li>
            <Link to="/students">All Students</Link>
            </li>
            <li>
            <Link to="/campus">Single Campus</Link>
            </li>
            <li>
            <Link to="/student">Single Student</Link>
            </li>
        </ul>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Field name="address" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <Field name="image" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <Field name="description" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}

AddCampusForm = reduxForm({
    form: 'contact'
})(AddCampusForm)

export default AddCampusForm;