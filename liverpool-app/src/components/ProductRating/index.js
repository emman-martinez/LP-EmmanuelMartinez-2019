import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component'; 
import './rating.css';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rating: 3.7
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                /> <a href="#"><u>3 opiniones</u></a>
                <hr/>
            </div>
        );
    }
}

export default Rating;

// const Rating = ( { rating } ) => (
//     <div>Estrellas: {rating}</div>
// )

// export default Rating;