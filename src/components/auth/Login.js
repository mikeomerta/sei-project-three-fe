import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../lib/api'
import { setToken } from '../lib/auth'

function Login() {

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const [isError, setIsError] = React.useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await login(formData)
      setToken(res.data.token)
      navigate('/projects')
    } catch (err) {
      setIsError(true)
    }
  }

  console.log('FROM', formData)
  
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
            <div>
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button'
                  type="submit"
                >Log Me In!</button>
              </div>
              {isError && (
                <p>Email or Password were incorrect. Please try again.</p>
              )}
              <div className='opposite-text'>
                <p>Not a member?  <Link to="/register">Click here</Link></p> 
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )

}

export default Login