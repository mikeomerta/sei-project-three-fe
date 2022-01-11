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
      <div className='form-page'>
        <div className='form-left'>
        </div>
        <div className='form-right'>
          <form
            className='form'
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <div>
                <input 
                  className='input'
                  name="username"
                  id="username"
                  placeholder="username"
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.username && <p className="error-style">Username is a required field</p>}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <div>
                <input 
                  className='input'
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.email && <p className="error-style">Email is a required field</p>}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div>
                <input 
                  className='input'
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.password && <p className="error-style">Password is a required field</p>}
            </div>
            <div className="form-field">
              <label htmlFor="passwordConfirmation">Password Confirmation</label>
              <div>
                <input  
                  className='input'
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="password confirmation"
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.passwordConfirmation && <p className="error-style">Passwords do not match</p>}
            </div>
            <div className="FIELD">
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button'
                  type="submit"
                >Register Me!</button>
              </div>
              <div className='opposite-text'>
                <p>Already a member?  <Link to="/login">Click here</Link></p> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registration

