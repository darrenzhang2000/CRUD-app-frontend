import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const ADD_SINGLE_CAMPUS = "ADD_SINGLE_CAMPUS";

class AllCampuses extends Component{
    render(){
        let allCampusesDisplay = this.props.campuses.map((campus, id)=>
            <div key={id}>
                <li>
                    <Link key={id} onClick={()=>this.props.dispatch({ type: ADD_SINGLE_CAMPUS, data: campus})} to="/campus">
                        Campus Name: {campus.name}
                    </Link>
                </li>
                <img src={campus.image} alt={campus.image}/>
            </div>
        )
        return(
            <div>
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
                <h1>All Campuses</h1>
                <ul>
                    {allCampusesDisplay}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log("state: ", state.campusState.allCampuses);
    return{
        campuses: state.campusState.allCampuses
    }
}

export default connect(mapStateToProps)(AllCampuses);
