import Select from 'react-select'
import React from 'react'
import { createProject } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const intialState = {
  projectTitle: '',
  primaryDescription: '',
  primaryImage: '',
  secondaryDescription: '',
  secondaryImage: [],
  categoryTag: [],
}

function AddProject() {
  const navigate = useNavigate()
  const [primaryCharacterCount, setPrimaryCharacterCount] = React.useState(0)
  const [secondaryCharacterCount, setSecondaryCharacterCount] = React.useState(0)
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)
  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  const categoryTags = [
    { value: 'art', label: 'art' },
    { value: 'health', label: 'health' },
    { value: 'music', label: 'music' },
    { value: 'gaming', label: 'gaming' }
  ]

  const handleTextInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors,  [e.target.name]: '' })
  }

  const handleSelectInputChange = (e) => {
    const selectedItems = e ? e.map(item => item.value) : []
    setFormData({ ...formData, categoryTag: selectedItems })
  }

  let primaryCharacterCountLimit = false
  if (primaryCharacterCount > 50) {
    primaryCharacterCountLimit = true
  }

  const handlePrimaryImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, primaryImage: res.data.url })
    setIsUploadingImage(false)
  }

  const handleSecondaryImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, secondaryImage: res.data.url })
    setIsUploadingImage(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createProject(formData)
      navigate(`/projects/${res.data._id}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section>
      <div className='add-project-page'>
        <div className='form'>
          <form 
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="projectTitle">Project Title *</label>
              <div>
                <input 
                  className='input'
                  name="projectTitle"
                  id="projectTitle"
                  placeholder="Project Title"
                  onChange={handleTextInputChange}
                />
              </div>
              {formErrors.projectTitle && <p>Project Title is a required field</p>}
            </div>
            <div className="form-field">
              <label htmlFor="primaryDescription">Primary Description* {primaryCharacterCount}/250</label>
              <div>
                <textarea 
                  className='input-text-area'
                  name="primaryDescription"
                  id="primaryDescription"
                  placeholder="Primary Description"
                  onChange={handleTextInputChange}
                  onChangeCapture={(e) => setPrimaryCharacterCount(e.target.value.length)}
                />
              </div>
              {primaryCharacterCountLimit ? <p>Too many characters</p> : ''}
              {formErrors.primaryDescription && <p>Primary Description is a required field</p>}
            </div>
            {isUploadingImage && <p>Image uploading</p>}
            {formData.primaryImage ?
              <div>
                <img src={formData.primaryImage} alt="uploaded primary image"/>
              </div>
              :
              <div className="form-field">
                <label htmlFor="primaryImage">Primary Image *</label>
                <div>
                  <input 
                    type="file"
                    name="primaryImage"
                    id="primaryImage"
                    accept="image/png, image/jpeg"
                    placeholder="Primary Image"
                    onChange={handlePrimaryImageUpload}
                  />
                </div>
                {formErrors.primaryImage && <p>Primary Image is a required field</p>}
              </div>
            }          
            <div className="form-field">
              <label htmlFor="secondaryDescription">Secondary Description {secondaryCharacterCount}/1000</label>
              <div>
                <textarea 
                  className='input-text-area'
                  name="secondaryDescription"
                  id="secondaryDescription"
                  placeholder="Secondary Description"
                  onChange={handleTextInputChange}
                  onChangeCapture={(e) => setSecondaryCharacterCount(e.target.value.length)}
                />
              </div>
              {secondaryCharacterCount === 1000 && <p>Too many characters</p>}
            </div>  
            {isUploadingImage && <p>Image uploading</p>}          
            {formData.secondaryImage.length !== 0 &&
            <div>
              <img src={formData.secondaryImage} alt="uploaded secondary image"/>
            </div>
            }
            <div className="form-field">
              <label htmlFor="secondaryImages">Secondary Images</label>
              <div>
                <input 
                  type="file"
                  name="secondaryImages"
                  id="secondaryImages"
                  accept="image/png, image/jpeg"
                  placeholder="Secondary Images"
                  multi onChange={handleSecondaryImageUpload}
                />
              </div>
            </div>              
            <div className="form-field">
              <label htmlFor="categoryTag">Category Tag</label>
              <Select 
                name='categoryTag'
                placeholder='Choose Tags'
                isMulti
                options={categoryTags}
                onChange={handleSelectInputChange}
              />
            </div>
            <div className="button-div">
              <div>
                <button 
                  className="button"
                  type="submit"
                >Submit!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddProject