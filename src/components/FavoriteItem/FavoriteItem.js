import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


class FavoriteItem extends Component {
    state = {
            category: this.props.image.category,
            id: this.props.image.id
    }

    setCategory = (category, event) => {
        console.log('event happened')
        console.log('STUFF', event.target.value);
        let newCategory = event.target.value;

        
        this.setState({
                ...this.state,
                [category]: newCategory,
        })
    }
    dispatchCategory = () => {
        console.log('STATE IS HERE!!!', this.state);
        
        this.props.dispatch({
            type: 'UPDATE_FAVS',
            payload: this.state
        })
    }

    render() {
        
        return (
            <div>
                <span><img src={this.props.image.url}/></span>
                <select 
                    name="category" 
                    id="category" 
                    placeholder="Select a Category" 
                    onChange={(event) => this.setCategory('category', event)}>
                <label for="category">Choose a Category</label>
                    <option value="funny">Funny</option>
                    <option value="nsfw">NSFW</option>
                    <option value="meme">Meme</option>
                    <option value="strange">Strange</option>
                    <option value="cartoon">Cartoon</option>
                </select>
                <button onClick={this.dispatchCategory}>Update Category</button>

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
export default connect(mapStateToProps)(FavoriteItem);