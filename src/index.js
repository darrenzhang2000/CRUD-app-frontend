import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';

//dummy data
const dummyStudent1 = {
    name: "s1",
    email: "s1 email",
    address: "s1 address",
    gpa: "s1 gpa"   
}

//dummy data
const dummyCampus1 = {
    name: "c1",
    image: "none",
    address: "c1 address",
    description: "c1 description"
}

const initialStudentState = {
    allStudents: [dummyStudent1],
    singleStudent: {}
}

const initialCampusState = {
    allCampuses: [dummyCampus1],
    singleCampus: {}
}

//action types
const ADD_TO_ALL_STUDENTS = "ADD_TO_ALL_STUDENTS";
const ADD_TO_ALL_CAMPUSES = "ADD_TO_ALL_CAMPUSES";
const ADD_SINGLE_STUDENT = "ADD_SINGLE_STUDENT";
const ADD_SINGLE_CAMPUS = "ADD_SINGLE_CAMPUS";

const campusReducer = function(state = initialCampusState, action){
    switch(action.type){
        case ADD_SINGLE_CAMPUS:
            //Since we must treat states as immutable, we must create a new objects/arrays
            console.log("state: ", state)
            var newState = {
                allCampuses: state.allCampuses,
                singleCampus: action.data  //new campus here
            }
            return newState;    
        case ADD_TO_ALL_CAMPUSES:
            let newAllCampuses = [...state.allCampuses, action.data];
            var newState = {
                allCampuses: newAllCampuses, //new array here
                singleCampus: state.singleCampus
            }
            return newState;
        default:
            return state;
    }
}

const studentReducer = function(state = initialStudentState, action){
    switch(action.type){
        case ADD_SINGLE_STUDENT:
            //Since we must treat states as immutable, we must create a new objects/arrays
            // console.log("state: ", state);
            var newState = {
                allStudents: state.allStudents,
                singleStudent: action.data //add new student data here
            }
            return newState;
        case ADD_TO_ALL_STUDENTS:
            //Since we must treat states as immutable, we must create a new objects/arrays
            // console.log("state: ", state);
            let newAllStudents = [...state.allStudents, action.data];
            var newState = {
                allStudents: newAllStudents, //new array here
                singleStudent: state.singleStudent
            }
            return newState;   
        default:
            return state;   
    }
}

const reducer = combineReducers({
    campusState: campusReducer,
    studentState: studentReducer
});

const store = createStore(reducer);
console.log('init', store.getState());


store.dispatch( 
    {
        type: ADD_SINGLE_STUDENT,
        data: {
            name: "temp",
            email: "temp email",
            address: "temp address",
            gpa: "temp gpa"
        }
    });  
    
store.dispatch( 
    {
        type: ADD_TO_ALL_STUDENTS,
        data: {
            name: "temp 2",
            email: "temp email 2",
            address: "temp address 2",
            gpa: "temp gpa 2"
        }
    });

store.dispatch( 
    {
        type: ADD_SINGLE_CAMPUS,
        data: {
            name: "temp",
            image: "temp img",
            address: "temp address",
            description: "temp description"
        }
    }); 

store.dispatch( 
    {
        type: ADD_TO_ALL_CAMPUSES,
        data: {
            name: "temp 2",
            image: "temp img 2",
            address: "temp address 2",
            description: "temp description 2"
        }
    });     
console.log('done', store.getState());
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
