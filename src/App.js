import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: [],
      searchBooks: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

// GRZYB ---------> setState function undefined..

    searchBooks(book) {
        BooksAPI.search(book).then(searchBooks => {
            this.setState({searchBooks})
        })
      }


  render() {
    return (
      <div className="app">

        <Route path='/' render={() => (
                <ListBooks
                books={this.state.books}/>
                )}
            />

        <Route path='/search' render={() => (
                <SearchBooks
                onSearch={this.searchBooks}/>
                )}
            />
      </div>
    )
  }
}

export default BooksApp
