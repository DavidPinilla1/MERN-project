import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';
import Axios from 'axios';

import BookItem from '../widgetsUI/book_items'

class home_container extends Component {
  componentWillMount() {
    this.props.dispatch(getBooks(3, 0, 'desc'));
  }
  renderItems=(books)=>(
    books.list ? 
      books.list.map(item =>(
        <BookItem {...item} key={item._id}/>
      ))
    :null
  )
  render() {
    return (<div>
      {this.renderItems(this.props.books)}
      
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(home_container);
