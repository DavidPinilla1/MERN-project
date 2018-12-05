import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, clearNewBook } from '../../actions';
class AddBook extends Component {
  state = {
    formdata: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  };

  handleInput = (event, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = event.target.value;

    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addBook({ ...this.state.formdata, OwnerID: this.props.user.login.id })
    );
  };
  componentWillUnmount() {
    this.props.dispatch(clearNewBook());
  }
  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.formdata.name}
              onChange={event => this.handleInput(event, 'name')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter the author"
              value={this.state.formdata.author}
              onChange={event => this.handleInput(event, 'author')}
            />
          </div>
          <textarea
            value={this.state.formdata.review}
            placeholder="Write the review"
            onChange={event => this.handleInput(event, 'review')}
          />
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter the pages"
              value={this.state.formdata.pages}
              onChange={event => this.handleInput(event, 'pages')}
            />
          </div>
          <div className="form_element">
            <select
              value={this.state.formdata.rating}
              onChange={event => this.handleInput(event, 'rating')}
            >
              {' '}
              <option val="1">1</option>
              <option val="2">2</option>
              <option val="3">3</option>
              <option val="4">4</option>
              <option val="5">5</option>
            </select>
          </div>
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter the Price"
              value={this.state.formdata.price}
              onChange={event => this.handleInput(event, 'price')}
            />
          </div>
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateTopProps)(AddBook);
