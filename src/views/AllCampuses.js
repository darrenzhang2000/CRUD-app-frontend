import React, { Component } from 'react'

class AllCampuses extends Component{
    render(){
        let allCampusesDisplay = this.props.campuses.map((campus, id)=>
            <div key={id}>
                <p key={id}>{campus.name}</p>
                <img src={campus.image} alt={campus.image}/>
            </div>
        )
        return(
            <div>
                <h1>All Campuses</h1>
                {allCampusesDisplay}
            </div>
        );
    }
}

export default AllCampuses;
