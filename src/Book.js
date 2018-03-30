import React from 'react'

const BookCover = ({ thumbnail }) => {
  const backgroundImage = thumbnail && 'url(' + thumbnail + ')';
  return <div className="book-cover" style={{width: 128, height: 192, backgroundImage }}></div>;
};

const Book = ({ book, defaultValue = 'none', onUpdate }) =>
  <li>
    <div className="book">
      <div className="book-top">
        <BookCover thumbnail={book.imageLinks && book.imageLinks.smallThumbnail}/>
        <div className="book-shelf-changer">
          <select defaultValue={defaultValue}
                  onChange={(e) => onUpdate(book, e.target.value)}>
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
  </li>;

export default Book;
