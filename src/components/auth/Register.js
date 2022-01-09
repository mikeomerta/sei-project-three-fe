import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { register } from '../lib/api'

const intialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Registration() {

  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors,  [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(formData)
      navigate('/login')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  console.log('formErrors', formErrors)

  return (
    <section>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <div className="FIELD">
            <label htmlFor="username">Username</label>
            <div>
              <input 
                name="username"
                id="username"
                placeholder="username"
                onChange={handleInputChange}
              />
            </div>
            {formErrors.username && <p>Username is a required field</p>}
          </div>
          <div className="FIELD">
            <label htmlFor="email">Email</label>
            <div>
              <input 
                name="email"
                id="email"
                placeholder="email"
                onChange={handleInputChange}
              />
            </div>
            {formErrors.email && <p>Email is required field</p>}
          </div>
          <div className="FIELD">
            <label htmlFor="password">Password</label>
            <div>
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleInputChange}
              />
            </div>
            {formErrors.password && <p>Password is a required field</p>}
          </div>
          <div className="FIELD">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <div>
              <input 
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="passwordConfirmation"
                onChange={handleInputChange}
              />
            </div>
            {formErrors.passwordConfirmation && <p>Passwords do not match</p>}
          </div>
          <div className="FIELD">
            <div>
              <button 
                type="submit"
              >Register Me!</button>
            </div>
            <div>
              <p>Already a member?  <Link to="/login">Click here</Link></p> 
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Registration

