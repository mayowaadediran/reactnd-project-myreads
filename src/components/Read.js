import React from 'react'
import Book from './Book'; 

export default function Read(props) {
  return (
     <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

              <Book />
           
          </ol>
        </div>
      </div>
  )
}
