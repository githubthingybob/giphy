import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


class Search extends Component {

    render() {
        
        return (
            <div>
                <span><img src={this.props.image.images.downsized_medium.url}/></span>
                <button onClick={this.removeItem}>Favorite!</button>
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