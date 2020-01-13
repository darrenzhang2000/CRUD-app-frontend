import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'

let AddCampusForm = props => {
    const { handleSubmit } = props
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
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
    form: 'addcampus'
})(AddCampusForm)

export default AddCampusForm;