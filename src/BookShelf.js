import React from 'react'
import CurrentlyReading from './components/CurrentlyReading'
import WantToRead from './components/WantToRead'
import Read from './components/Read'

const BookShelf = () => {
  return (
  <div className="list-books-content">
    <div>
      <CurrentlyReading /> 
      <WantToRead /> 
      <Read /> 
    </div>
  </div>
  )
}

export default BookShelf