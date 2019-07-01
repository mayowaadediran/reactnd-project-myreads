import React, {Component} from 'react'
import * as BooksAPI from '../utils/BooksAPI'

class Book extends Component {

  state = {
    shelf: this.props.book.shelf,
    bookId: this.props.book.id,
    book: this.props.book,
  }

  onChange = (e) => {
    this.setState({
      shelf: e.target.value
    }, () => { this.updateBookShelf() })
  }

  updateBookShelf = () => {
    BooksAPI.update(this.state.book, this.state.shelf)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.book.imageLinks.thumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.onChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.book.title}</div>
        <div className="book-authors"></div>
      </div>
    )
  }
}

export default Book