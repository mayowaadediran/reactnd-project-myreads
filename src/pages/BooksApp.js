import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Nav from './components/Nav'
import BookShelf from './BookShelf'
import OpenSearch from './components/OpenSearch'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    //get all the books from the end point and set it as the book state
    
  }

  
  render() {
    return (
      <div className="list-books">
        <Nav />
        <BookShelf />
        <OpenSearch />
      </div>
    )
  }
}

export default BooksApp
