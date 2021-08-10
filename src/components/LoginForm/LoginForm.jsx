import { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const history = useHistory();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      await setUser(user);
      history.push('/')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <h3 className="login-h3">Welcome Back</h3>
      <p className="login-p">Sign in with your email address and password</p>
      <div className="login-form-container" onSubmit={handleSubmit}>
        <form className="login-form" autoComplete="off" >
          <input className="login-input" type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="email" autoCorrect="off" autoCapitalize="off" required />
          <input className="login-input" type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="password" required />
          <button className="login-button" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="login-p2">New to Sunset Seafood?&nbsp;&nbsp;<Link className="login-linkto-create" to="/signup">Create an account</Link></p>
      <p className="error-message">&nbsp;{error}</p>

    </div>
  );
}