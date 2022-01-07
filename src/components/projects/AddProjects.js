import Select from 'react-select'
import React from 'react'
import { headers } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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

  const [isUploadingImage, setIsUploadingImage] = React.useState(false)

  const handleTextInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectInputChange = (e) => {
    const selectedItems = e ? e.map(item => item.value) : []
    setFormData({ ...formData, categoryTag: selectedItems })
  }

  const handlePrimaryImageUpload = async (e) => {
    // console.log(e.target.files)
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, primaryImage: res.data.url })
    setIsUploadingImage(false)
  }

  const handleSecondaryImageUpload = async (e) => {
    // console.log(e.target.files)
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, secondaryImage: res.data.url })
    setIsUploadingImage(false)
  }
  
  // * To show information being passed. Can be deleted. 
    
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   window.alert(`Submitting ${JSON.stringify(formData, null, 2)}`)
  // }
  
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
          {isUploadingImage && <p>Image uploading</p>}
          {formData.primaryImage ?
            <div>
              <img src={formData.primaryImage} alt="uploaded primary image"/>
            </div>
            :
            <div className="FIELD">
              <label htmlFor="primaryImage">Primary Image *</label>
              <div>
                <input 
                  type="file"
                  name="primaryImage"
                  id="primaryImage"
                  placeholder="Primary Image"
                  onChange={handlePrimaryImageUpload}
                />
              </div>
            </div>
          }          
          <div className="FIELD">
            <label htmlFor="secondaryDescription">Secondary Description</label>
            <div>
              <textarea 
                name="secondaryDescription"
                id="secondaryDescription"
                accept="image/png, image/jpeg"
                placeholder="Secondary Description"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
          <div className="FIELD">
            <label htmlFor="secondaryImages">Secondary Images</label>
            <div>
              <input type="file"
                name="secondaryImages"
                id="secondaryImages"
                accept="image/png, image/jpeg"
                placeholder="Secondary Images"
                onChange={handleSecondaryImageUpload}
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