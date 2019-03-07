import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actionCreators';

export class Login extends React.Component {
  userNameRef = React.createRef();

  passwordRef = React.createRef();

  onLogin = () => {
    const username = this.userNameRef.current.value;
    const password = this.passwordRef.current.value;

    this.props.login(username, password);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.userNameRef} placeholder="Enter user name"></input>
        <input type="text" ref={this.passwordRef} placeholder="Enter password"></input>
        <button onClick={this.onLogin}>Log in</button>
        <button onClick={() => localStorage.clear()}>Log out</button>
      </div>
    );
  }
}

export default connect(st => st, { login })(Login);
