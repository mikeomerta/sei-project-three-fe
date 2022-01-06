import React from 'react'
import { useNavigate } from 'react-router-dom' 
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
      navigate('/')
    } catch (err) {
      throw new Error()
    }
  }

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
          </div>
          <div className="FIELD">
            <div>
              <button 
                type="submit"
              >Register Me!</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Registration

