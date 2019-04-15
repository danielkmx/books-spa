import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import BooksList from "./talents/BooksList";
import  BooksDetail  from "./talents/BooksDetail";
import BooksFavorite from "./talents/BooksFavorite";
import Header from "./Header";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    if (this.props.signedIn) {
      return (
        <div className="ui container">
          <BrowserRouter>
            <div>
              <Header signIn={this.props.signedIn} />

              <Route path="/" exact component={BooksList} />
              <Route
                path="/books/detail"
                exact
                render={props => <BooksDetail {...props} book={this.props.book} />}
              />
              <Route path="/books/favorite" exact component={BooksFavorite} />
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <BrowserRouter>
            <div>
              <Header signIn={this.props.signedIn} />

              <div className="ui message">
                <p>You must login first.</p>
              </div>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default connect(state => ({
  signedIn: state.auth.isSignedIn,
  book: state.selectedBook
}))(App);
