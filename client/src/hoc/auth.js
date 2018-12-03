import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/index';
export default function(ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };
    componentWillMount() {
      this.props.dispatch(auth());
    }

    componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if(!nextProps.user.login.isAuth){
        this.props.history.push('/login')
    }else{
     // this.props.history.push('/user')
   
      }
    }
    render() {
      console.log(this.props)
      if (this.state.loading) {
        return <div className="loader">Loading...</div>;
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  } 
  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  return connect(mapStateToProps)(AuthenticationCheck);
}
