import React from 'react'
import {Link} from 'react-router-dom'

import Book from './Book';

const ListBooks = props => {
  const readBooks = props.books.filter((book) => book.shelf === 'read');
  const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead');
  const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading');

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {currentlyReading.map((book) =>
              <Book
                key={book.id}
                onUpdate={props.onUpdate}
                defaultValue="currentlyReading"
                book={book}
              />)}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {wantToRead.map((book) =>
                <Book
                  key={book.id}
                  onUpdate={props.onUpdate}
                  defaultValue="wantToRead"
                  book={book}
                />
            )}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {readBooks.map((book) =>
              <Book
                key={book.id}
                onUpdate={props.onUpdate}
                defaultValue="read"
                book={book}
              />
            )}
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
    );
};

export default ListBooks