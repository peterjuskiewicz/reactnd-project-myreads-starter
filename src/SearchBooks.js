import React from 'react'
import {Link} from 'react-router-dom'


class SearchBooks extends React.Component {

    updateQuery = (query) => {
        this.props.onSearch(query);
         console.log(this.props.searchResults)

    }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">{this.props.searchResults && this.props.searchResults.length > 0
                && this.props.searchResults.map(result =>
                    <li key={result.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                    style={{width: 128, height: 192, backgroundImage: 'url(' + result.imageLinks.smallThumbnail + ')'}}></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue='none'
                                        onChange={(e) => this.props.onUpdate(result, e.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{result.title}</div>
                                <div className="book-authors">{result.authors}</div>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
          </div>
            )



}
}

export default SearchBooks