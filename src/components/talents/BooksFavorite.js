import React from "react";
import { connect } from "react-redux";
import "./BooksList.css";
import { fetchFavoriteBooks , deleteFavoriteBook } from "../../actions";
import BooksDetail from "./BooksDetail";

class BooksFavorite extends React.Component {
  render() {
    const books = this.props.favoriteBooks.map(book => {
      return (
        <div>
          <BooksDetail book={book.data} />
          <button onClick={() => {
              this.props.deleteFavoriteBook(book.data._id);
              this.props.fetchFavoriteBooks();
              this.props.history.push('/');
          }}className="ui button delete">Delete</button>
        </div>
      );
    });
    return (
      <div>
        {books}
        <div />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favoriteBooks: state.favoriteBooks
  };
};

export default connect(
  mapStateToProps,
  { fetchFavoriteBooks ,deleteFavoriteBook}
)(BooksFavorite);
