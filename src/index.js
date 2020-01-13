import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from './views/AllCampuses';
import AllStudents from './views/AllStudents';
import SingleCampus from './views/SingleCampus';
import SingleStudent from './views/SingleStudent';
import { Provider } from 'react-redux';
import EditCampusForm from './views/EditCampusForm';
import AddCampusForm from './views/AddCampusForm';
import AddCampusPage from './views/AddCampusPage';
import AddStudentForm from './views/AddStudentForm';
import AddStudentPage from './containers/AddStudentPage';
import { reducer as formReducer } from 'redux-form';


//dummy data
const dummyStudent1 = {
    name: "s1",
    email: "s1 email",
    address: "s1 address",
    gpa: "s1 gpa",
    campusName: "Hunter College"
}

const dummyStudent2 = {
    name: "s2",
    email: "s2 email",
    address: "s2 address",
    gpa: "s2 gpa",
    campusName: "Hunter College"
}

//dummy data
const dummyCampus1 = {
    name: "c1",
    image: "none",
    address: "c1 address",
    description: "c1 description",
    studentList: [dummyStudent1]
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
const EDIT_SINGLE_STUDENT = "EDIT_SINGLE_STUDENT";  
const EDIT_SINGLE_CAMPUS = "EDIT_SINGLE_CAMPUS";

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
        case EDIT_SINGLE_CAMPUS:
            let temp = [...state.allCampuses];
            let campusIndex = temp.indexOf(campus => campus.name === action.campusName);
            temp[campusIndex] = action.data;
            return temp; 
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
    studentState: studentReducer,
    form: formReducer
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
            gpa: "temp gpa",
            campusName: "temp campus 1 from store"
        }
    });  
    
store.dispatch( 
    {
        type: ADD_TO_ALL_STUDENTS,
        data: {
            name: "temp 2",
            email: "temp email 2",
            address: "temp address 2",
            gpa: "temp gpa 2",
            campusName: "temp campus 1"
        }
    });
store.dispatch( 
    {
        type: ADD_TO_ALL_STUDENTS,
        data: {
            name: "temp 3",
            email: "temp email 2",
            address: "temp address 2",
            gpa: "temp gpa 2",
            campusName: "temp campus 1"
        }
    });

store.dispatch( 
    {
        type: ADD_TO_ALL_STUDENTS,
        data: {
            name: "temp",
            image: "temp img",
            address: "temp address",
            description: "temp description",
            studentList: [dummyStudent1, dummyStudent2]
        }
    }); 
store.dispatch( 
    {
        type: ADD_SINGLE_CAMPUS,
        data: {
            name: "Hunter College",
            image: "temp img",
            address: "temp address",
            description: "temp description",
            studentList: [dummyStudent1, dummyStudent2]
        }
    }); 

store.dispatch( 
    {
        type: ADD_TO_ALL_CAMPUSES,
        data: {
            name: "temp 2",
            image: "temp img 2",
            address: "temp address 2",
            description: "temp description 2",
            studentList: [dummyStudent1, dummyStudent2]

        }
    });     

store.dispatch( 
    {
        type: ADD_TO_ALL_CAMPUSES,
        data: {
            name: "temp campus 1 from store",
            image: "temp img 2",
            address: "temp address 2",
            description: "temp description 2",
            studentList: [dummyStudent1, dummyStudent2]

        }
    });   

    store.dispatch( 
        {
            type: ADD_TO_ALL_CAMPUSES,
            data: {
                name: "Hunter College",
                image: "temp img 2",
                address: "temp address 2",
                description: "temp description 2",
                studentList: [dummyStudent1, dummyStudent2]
    
            }
        });  
console.log('done', store.getState());
console.log(store.getState());

const uniqStudent = ({ match }) => <p>{match.params.id}</p>
const routing = (
    <Provider store={store}>
 
        <Router>
        <h1>HEADER TEST</h1>
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
                <li>
                <Link to="/campus/add">Add Campus</Link>
                </li>
                <li>
                <Link to="/student/add">Add Student</Link>
                </li>
            </ul>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/campuses" component={AllCampuses} />
                <Route exact path="/students" component={AllStudents} />
                <Route exact path="/campus" component={SingleCampus} />
                <Route exact path="/student" component={SingleStudent} />
                <Route exact path="/campus/edit" component={EditCampusForm}/>
                <Route exact path="/campus/add" component={AddCampusPage}/>
                <Route exact path="/student/add" component={AddStudentPage}/>
                {/* <Route exact path="/student/:id" component={SingleStudent} />
                <Route exact path="/campus/:id" component={SingleCampus} /> */}
            </div>
        </Router>
        <h1>FOOTER TEST</h1>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
export default store; 