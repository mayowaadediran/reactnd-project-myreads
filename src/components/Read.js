import React from 'react'
import Book from './Book'; 

const Read = (props) => {

    const read = props.books.filter((book) => {
      return book.shelf === "read"
    })
  return (
     <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {read.map((book) => {
              return (
                <Book 
                  book={book}
                  key={book.id}
                />
              )
            })}
          </ol>
        </div>
      </div>
  )
}

export default Read 