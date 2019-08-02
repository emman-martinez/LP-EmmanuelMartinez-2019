import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component'; 
import './rating.css';

class Rating extends Component {
    
    state = {
        rating: 0,
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 product-title">
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                            /> <a href="https://www.liverpool.com.mx/tienda/home.jsp"><u>3 opiniones</u></a>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rating;