import React, {Component} from 'react';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Favorites extends Component{
    componentDidMount = () => {
        console.log('component did mount in favorites.js');
        this.getFavorites();
        
    }

    getFavorites = () => {
                 this.props.dispatch({
                     type: "GET_FAVS",
                 });
    }
    render(){
        console.log('This.props.reduxState.favsList', this.props.reduxState.favsList);
        
        return(
        <div>
            <h3>Favorites</h3>
                {this.props.reduxState.favsList.map(img =>
                <span key={img.id}> <img src ={img.url}/> </span>)}
        </div>
        )

    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);