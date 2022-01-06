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
      console.log(err.response.data)
    }
  }

  console.log('FROM', formData)
  
  return (
    <section>
      <div>
        <form
          onSubmit={handleSubmit}
        >
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
          </div>
          <div className="FIELD">
            <div>
              <button 
                type="submit"
              >Log Me In!</button>
            </div>
            <div>
              <p>Not a member?  <Link to="/register">Click here</Link></p> 
            </div>
          </div>
        </form>
      </div>
    </section>
  )

}

export default Login