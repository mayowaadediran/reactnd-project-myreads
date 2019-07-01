import React from 'react'
import Book from './Book'

const CurrentlyReading = (props) => {

  const currentReading = props.books.filter((book) => {
    return book.shelf === "currentlyReading"
  })

  return (
   <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentReading.map((book) => (
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

export default CurrentlyReading