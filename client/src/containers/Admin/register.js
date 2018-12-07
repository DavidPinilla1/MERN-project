import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, RegisterUser } from '../../actions/index';
class register extends PureComponent {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: ''
  };

  componentWillMount() {
    this.props.dispatch(getUsers());
  }
  showUsers = user =>
    user.users
      ? user.users.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
          </tr>
        ))
      : null;
  handlenInputEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlenInputPassword = e => {
    this.setState({ password: e.target.value });
  };
  handlenInputName = e => {
    this.setState({ name: e.target.value });
  };
  handlenInputLastname = e => {
    this.setState({ lastname: e.target.value });
  };

  componentWillReceiveProps(nextProps){
     if(nextProps.user.register===false){
         this.setState({error:'Error, try again'})
     }else{
         this.setState({
            name: '',
            lastname: '',
            email: '',
            password: ''
         })
     }
  }

  submitForm = e => {
    e.preventDefault();
    this.setState({ error: '' });
    console.log(this.state);
    this.props.dispatch(
      RegisterUser({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname
      },this.props.user.users)
    );
  };
  render() {
    let user = this.props.user;
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handlenInputName}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter lastname"
              value={this.state.lastname}
              onChange={this.handlenInputLastname}
            />
          </div>
          <div className="form_element">
            <input
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handlenInputEmail}
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlenInputPassword}
            />
          </div>
          <button type="Submit">Add admin</button>
          <div className="error">{this.state.error}</div>
        </form>
        <div className="current_users">
          <h4>Current users</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.showUsers(user)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(register);
