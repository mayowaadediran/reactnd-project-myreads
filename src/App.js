import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NotFound from './Pages/NotFound'; 
import BooksApp from  './Pages/BooksApp';
import BookSearch from './Pages/BookSearch';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={BooksApp}/>
          <Route path="/search" component={BookSearch}/>
          <Route component={NotFound}/> 
        </Switch>
      </div>
    )
  }
}

export default App
