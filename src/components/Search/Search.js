import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem.js';


//TEXT INPUT (with local state onChange)
//BUTTON TO CLICK (with onClick function)
//Dispatch get request (payload: text local state) --->Goes to DOM
//get reduxState, splat on DOM
class Search extends Component {

    // componentDidMount(){
    //     this.props.dispatch({
    //         type: 'REFRESH_IMAGES',
    //     })
    // }

    state = {
        searchQuery: ''
    }

    handleChange = (event) => {
        console.log('typing in search box', this.state.searchQuery);
        this.setState({
            searchQuery: event.target.value
        })
    }

    handleClick = () => {
        // console.log('clucking search');
        this.props.dispatch({
            type: 'REFRESH_IMAGES',
            payload: this.state.searchQuery
        })
    }

    render() {
        
        return (
            <div>
                <Router>
                    <Link to="/favorites">see my favorites!</Link>
                </Router>
                <h1>Search Router</h1>
                <input onChange={(event) => this.handleChange(event, 'searchQuery')} placeholder="what do you want to see gifs of?"></input>
                <button onClick={this.handleClick}>get me gifs!</button> 

                {/* {this.props.reduxState.imageList.map(image =>
                // <li key = {image.id}><img src ={image.url}/></li>)}
                {return <img src ={image.images.downsized.url}/>})} */}

                {this.props.reduxState.imageList.map((image, i)=> 
                <SearchItem key={image.id} image={image} />)}


            
            </div>
        );
    }

}


const mapStateToProps = (reduxState) => {
    return(
        {
            reduxState
        }
    )
}

export default connect(mapStateToProps)(Search);