import React from 'react'
import Book from './Book'

 function WantToRead(props) {

  const read = props.books.filter((book) => {
    return book.shelf === "wantToRead"
  })
  return (
     <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {read.map((book) => (
              <Book 
                book={book}
                key={book.id}
              />
            ))}
              
          </ol>
        </div>
      </div>
  )
}

export default WantToRead