import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBooks(book, shelf) {
    const newBooks = this.state.books.map(
      bookObj => (bookObj.id === book.id ? { ...bookObj, shelf } : bookObj)
    );
    this.setState({ books: newBooks });
    BooksAPI.update(book, shelf);
  }

  addBooks(book, shelf) {
    const { books } = this.state;
    if (books.find(existingBook => existingBook.id === book.id)) {
      const newBooksState = books.map(existingBook => existingBook.id === book.id ? {...book, shelf } : existingBook);
      this.setState({books: newBooksState})
    } else {
      const newBook = {...book, shelf };
      this.setState({ books: [ ...books, newBook, ] });
    }

    BooksAPI.update(book, shelf);
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
              books={this.state.books}
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
