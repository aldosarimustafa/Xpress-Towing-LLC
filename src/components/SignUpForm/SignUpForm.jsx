import { useState } from 'react';
import { Link } from "react-router-dom";
import { signUp } from '../../utilities/users-service';
import { useHistory } from 'react-router';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const history = useHistory();

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or the 
      // 'confirm state properties
      const newFormData = { ...formData };
      delete newFormData.error;
      delete newFormData.confirm;
      // The promise returned by the signUp service methods
      // will resolve to the user object included in the
      // payload of the JSON Web Token
      const user = await signUp(newFormData);
      await setUser(user);
      history.push('/')
    } catch {
      // An error occurred
      setFormData({ error: 'Sign Up Failed - Try Again' });
    }
  }

  // Must override the render method
  // The render method takes the place of 
  // a function component, in that its job
  // is to return the UI as JSX
  const disable = formData.password !== formData.confirm;
  return (
    <div>
      <h3 className="signup-h3">Lets get started</h3>
      <p className="signup-p">Enter your information (required)</p>
      <div className="signup-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input className="signup-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" required />
          <input className="signup-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" required />
          <input className="signup-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required />
          <input className="signup-input" type="password" name="confirm" value={formData.confirm} onChange={handleChange} placeholder="confirm password" required />
          <button className="signup-button" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="signup-p2">Already a member?&nbsp;&nbsp;<Link className="signup-link-to-login" to="/login">Sign in</Link></p>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}