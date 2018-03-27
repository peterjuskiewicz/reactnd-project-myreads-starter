import React from 'react'
import {Link} from 'react-router-dom'

class ListBooks extends React.Component {



    render() {

        let readBooks = this.props.books.filter((book) => book.shelf === 'read')
        let wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
        let currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')

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
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                    style={{width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'}}></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue={'currentlyReading'}
                                        onChange={(e) => this.props.onUpdate(book, e.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) =>
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                    style={{width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'}}></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue='wantToRead'
                                        onChange={(e) => this.props.onUpdate(book, e.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {readBooks.map((book) =>
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                    style={{width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'}}></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue='read'
                                        onChange={(e) => this.props.onUpdate(book, e.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
            )
    }
}

export default ListBooks