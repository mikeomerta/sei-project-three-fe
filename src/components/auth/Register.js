import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { register } from '../lib/api'

function Registration() {

  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(formData)
      navigate('/login')
    } catch (err) {
      throw new Error()
    }
  }

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

