import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  searchBooks = book => {
    book.length > 0 &&
      BooksAPI.search(book).then(searchBooks => {
        this.setState({ searchBooks: searchBooks
          .filter((book) => book.shelf && book.shelf == 'none' ||
            !this.state.books.map((bookObj) => bookObj.id).includes(book.id))});
      });
  };

  updateBooks(book, shelf) {
    const newBooks = this.state.books.map(
      bookObj => (bookObj.id === book.id ? { ...bookObj, shelf } : bookObj)
    );
    this.setState({ books: newBooks });
    BooksAPI.update(book, shelf);
  }

  addBooks(book, shelf) {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <ListBooks
              books={this.state.books}
              onUpdate={(book, shelf) => this.updateBooks(book, shelf)}
            />
          )}
        />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              onSearch={this.searchBooks}
              searchResults={this.state.searchBooks}
              onUpdate={(book, shelf) => {
                this.addBooks(book, shelf);
                history.push('/');
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
