import Select from 'react-select'
import React from 'react'
import { headers } from '../lib/api'
import { useNavigate } from 'react-router-dom'

function AddProject() {
  const navigate = useNavigate()

  const categoryTags = [
    { value: 'art', label: 'art' },
    { value: 'health', label: 'health' },
    { value: 'music', label: 'music' },
    { value: 'gaming', label: 'gaming' }
  ]

  const [formData, setFormData] = React.useState({
    projectTitle: '',
    primaryDescription: '',
    primaryImage: '',
    secondaryDescription: '',
    secondaryImage: [],
    categoryTag: [],
  })

  const handleTextInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectInputChange = (e) => {
    const selectedItems = e ? e.map(item => item.value) : []
    setFormData({ ...formData, categoryTag: selectedItems })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await headers(formData)
      navigate(`/projects/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <div className="FIELD">
            <label htmlFor="projectTitle">Project Title *</label>
            <div>
              <input 
                name="projectTitle"
                id="projectTitle"
                placeholder="Project Title"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="primaryDescription">Primary Description *</label>
            <div>
              <textarea 
                name="primaryDescription"
                id="primaryDescription"
                placeholder="Primary Description"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="primaryImage">Primary Image *</label>
            <div>
              <input 
                name="primaryImage"
                id="primaryImage"
                placeholder="Primary Image"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="secondaryDescription">Secondary Description</label>
            <div>
              <textarea 
                name="secondaryDescription"
                id="secondaryDescription"
                placeholder="Secondary Description"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="secondaryImages">Secondary Images</label>
            <div>
              <input 
                name="secondaryImages"
                id="secondaryImages"
                placeholder="Secondary Images"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="categoryTag">Category Tag</label>
            <Select 
              name='categoryTag'
              placeholder='Choose Tag'
              isMulti
              options={categoryTags}
              onChange={handleSelectInputChange}
            />
          </div>
          <div className="FIELD">
            <div>
              <button 
                type="submit"
              >Submit!</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddProject