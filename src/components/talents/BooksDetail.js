import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "./BooksDetail.css";
import StarRatings from "react-star-ratings";

class BooksDetail extends React.Component { 
  render() {
   
  let { book } = this.props;
  if(book === null){
    book = this.props.location.state.book
  }
     
  return  (
    <div className="book-detail">
      <div className="title">{book.Name}</div>
      <div className="cover-img">
        <img src={book.ImgURL} />
      </div>
      <div className="author">
        <span class="author">{book.Author}</span>
      </div>
      <div className="description">
        <p>{book.Description}</p>
      </div>
      <div>

      <StarRatings
                rating={Number(book.Rating)}
                starDimension="15px"
                starSpacing="10px"
              />
      </div>
    </div>
  );
  }
  
}
export default BooksDetail;