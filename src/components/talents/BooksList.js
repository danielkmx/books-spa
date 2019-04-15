import React from "react";
import { connect } from "react-redux";
import { fetchBooks , selectBook ,fetchFavoriteBooks ,addFavoriteBook } from "../../actions";
import { Link } from "react-router-dom";
import "./BooksList.css";
import StarRatings from "react-star-ratings";

class BooksList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchFavoriteBooks();

  }
  render() {
    if (this.props.books.length > 0) {
      const books = this.props.books.map((book, i) => {
        return (
          <div className="book-card">
            <div className="cover">
              <img src={book.ImgURL} />
            </div>
            <div className="description">
              <p className="title">
                {book.name}
                <span class="author">{book.Author}</span>
              </p>
            </div>
            <div>
              <StarRatings
                rating={Number(book.Rating)}
                starDimension="15px"
                starSpacing="10px"
              />
            </div>
            <div className="">
            <Link to={{pathname: `/books/detail`, state: {
    book: book }}}>Details</Link>
            <a className="favorite" onClick={() => {
              this.props.addFavoriteBook(book._id)
              this.props.fetchFavoriteBooks();
            }}
              ><i className="heart icon" /> Favorite</a>

            </div>
          </div>
        );
      });
      return <div className="book-container">
      <h1>Books</h1>
      {books}</div>;
    }
    return (
      <div className="book-container">
        <h1>Books</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { books: state.books };
};

export default connect(
  mapStateToProps,
  { fetchBooks , selectBook ,fetchFavoriteBooks,addFavoriteBook}
)(BooksList);
