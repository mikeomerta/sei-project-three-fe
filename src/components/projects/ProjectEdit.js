import Select from 'react-select'
import React from 'react'
import { getSingleProject, headers } from '../lib/api'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const initialState = {
  projectTitle: '',
  primaryDescription: '',
  primaryImage: '',
  secondaryDescription: '',
  secondaryImage: [],
  categoryTag: [],
}

function ProjectEdit() {
  const [formData, setFormData] = React.useState(initialState)
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [primaryCharacterCount, setPrimaryCharacterCount] = React.useState(0)
  const [secondaryCharacterCount, setSecondaryCharacterCount] = React.useState(0)
  const { projectId } = useParams()
  const navigate = useNavigate()
    
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProject(projectId)
        setFormData(res.data)
      } catch (err) {
        setFormErrors(err.response.data.errors)
      }
    }
    getData()
  }, [projectId])

  const categoryTags = [
    { value: 'Advertising', label: 'Advertising' },
    { value: 'Animation', label: 'Animation' },
    { value: 'Art', label: 'Art' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Graphic Design', label: 'Graphic Design' },
    { value: 'Health', label: 'Health' },
    { value: 'Illustration', label: 'Illustration' },
    { value: 'Music', label: 'Music' },
    { value: 'Photography', label: 'Photography' },
    { value: 'Writing', label: 'Writing' }
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
  if (primaryCharacterCount > 250) {
    primaryCharacterCountLimit = true
  }

  let secondaryCharacterCountLimit = false
  if (primaryCharacterCount > 1000) {
    secondaryCharacterCountLimit = true
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
      const res = await axios.put(`/api/projects/${projectId}`, formData, headers())
      console.log('RES', res.data.message)
      navigate(`/projects/${projectId}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section>
      <div className='edit-project-page'>
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
                  value={formData.projectTitle}
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
                  value={formData.primaryDescription}
                />
              </div>
              {primaryCharacterCountLimit ? <p>Too many characters</p> : ''}
              {formErrors.primaryDescription && <p>Primary Description is a required field</p>}
            </div>
            {isUploadingImage && <p>Image uploading</p>}            
            <div className="primary-image-container">
              <img className="primary-image" src={formData.primaryImage} alt="uploaded primary image"/>
            </div>              
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
                  value={formData.secondaryDescription}
                />
              </div>
              {secondaryCharacterCountLimit ? <p>Too many characters</p> : ''}
            </div>
            {isUploadingImage && <p>Image uploading</p>}
            {formData.secondaryImage.length !== 0 &&
            <div className="secondary-image-container">
              <img className="secondary-image" src={formData.secondaryImage} alt="uploaded secondary image"/>
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
                  onChange={handleSecondaryImageUpload}
                />
              </div>
            </div>              
            <div className="form-field">
              <label htmlFor="categoryTag">Category Tag</label>
              <Select 
                name='categoryTag'
                placeholder='Choose Tag'
                isMulti
                options={categoryTags}
                onChange={handleSelectInputChange}
                value={''}
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

export default ProjectEdit