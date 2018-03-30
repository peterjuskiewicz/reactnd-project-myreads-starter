import React from 'react'
import {Link} from 'react-router-dom'

import Book from './Book';
import * as BooksAPI from "./BooksAPI";

const getBookShelf = (books, bookId) => {
  const bookOnTheShelf = books && books.find(book => book.id === bookId);
  return bookOnTheShelf && bookOnTheShelf.shelf;
};

class SearchBooks extends React.Component {
  state = { searchResults: [], };

  searchBooks = event => {
    const searchQuery = event.target.value;

    if (searchQuery.length > 0) {
      BooksAPI.search(searchQuery).then(searchResults => {
        this.setState({ searchResults });
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { searchResults } = this.state;
    const { books, onUpdate } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              autoFocus
              type="text"
              onChange={this.searchBooks}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{searchResults && searchResults.length > 0
          && searchResults.map(book =>
            <Book
              key={book.id}
              onUpdate={onUpdate}
              defaultValue={getBookShelf(books, book.id)}
              book={book}
            />
          )}
            {searchResults.error && <div>No search results</div>}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks