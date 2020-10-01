import React, {Component} from 'react';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Favorites extends Component{
    componentDidMount = () => {
        console.log('component did mount in favorites.js');
        
    }

    getFavorites = () => {
                 this.props.dispatch({
                     type: "GET_FAVS",
                 });
    }
    render(){
        return(
        <div>
            <h3>Favorites</h3>
            <ul>
                {this.props.reduxState.imageList.map(img =>
                <li key={img.id}> <img src ={img.url}/> </li>)}
            </ul>
        </div>
        )

    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);