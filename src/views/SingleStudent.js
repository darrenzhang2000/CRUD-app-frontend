import react, { Component } from 'react'

class SingleCampus extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.image}</p>
                <p>{this.props.address}</p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default SingleCampus;
