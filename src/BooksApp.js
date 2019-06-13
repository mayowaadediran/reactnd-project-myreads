import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {

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
