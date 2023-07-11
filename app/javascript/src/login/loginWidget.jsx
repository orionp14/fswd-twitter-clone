// loginWidget.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@src/utils/fetchHelper';
import './login.scss';
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

class LoginWidget extends React.Component {
  state = {
    username: '',
    password: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/home';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not log in.',
        })
      })
  }

  render () {
    const { username, password, error } = this.state;
    return (
      <React.Fragment>
        <div className="icon-container">
          <TwitterIcon className="twitter-icon" />
        </div>
        <h1 className='login-header-text'>Sign In to Twitter</h1>
        <form onSubmit={this.login}>
          <input name="username" type="text" className="form-control form-control-lg mb-3 signin-form" placeholder="Username" value={username} onChange={this.handleChange} required />
          <input name="password" type="password" className="form-control form-control-lg mb-3 signin-form" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit" className="btn btn-primary btn-block btn-lg login-button">Log in</button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </form>
        <hr/>
        <button type="submit" className="btn btn-outline-danger btn-block btn-lg google-button">Log in with <GoogleIcon className='google-icon'/></button>
        <button type="submit" className="btn btn-outline-secondary btn-block btn-lg apple-button">Log in with <AppleIcon className='apple-icon'/></button>
        <p className="mb-0 signup-text">Don't have an account? <a className="text-primary" onClick={this.props.toggle}>Sign up</a></p>
      </React.Fragment>
    )
  }
}

export default LoginWidget