import React from 'react'
import Read from './Read';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';




//gets book props from the book state
//filter from the books 

const BookShelf = (props) => {
  
  return (
  <div className="list-books-content">
    <div>
      <CurrentlyReading 
        books={props.books}
        title="Currently Reading"
      />
      <WantToRead 
        books={props.books}
        title = "Want To Read"
      />
      <Read 
        books={props.books}
        title = "Read"
      /> 
    </div>
  </div>
  )
}

export default BookShelf