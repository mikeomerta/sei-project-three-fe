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
  const { projectId } = useParams()
  const navigate = useNavigate()
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProject(projectId)
        setFormData(res.data)
      } catch (err) {
        console.log(err.response.data.errors)
      }
    }
    getData()
  }, [projectId])

  const categoryTags = [
    { value: 'art', label: 'art' },
    { value: 'health', label: 'health' },
    { value: 'music', label: 'music' },
    { value: 'gaming', label: 'gaming' }
  ]

  const [isUploadingImage, setIsUploadingImage] = React.useState(false)

  const handleTextInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectInputChange = (e) => {
    const selectedItems = e ? e.map(item => item.value) : []
    setFormData({ ...formData, categoryTag: selectedItems })
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
      console.log(projectId)
      const res = await axios.put(`/api/projects/${projectId}`, formData, headers() )
      console.log('RES', res.data.message)
      navigate(`/projects/${projectId}`)
    } catch (err) {
      console.log(err)
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
                value={formData.projectTitle}
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
                value={formData.primaryDescription}
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
                  accept="image/png, image/jpeg"
                  placeholder="Primary Image"
                  onChange={handlePrimaryImageUpload}
                  value={formData.primaryImage}
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
                placeholder="Secondary Description"
                onChange={handleTextInputChange}
                value={formData.secondaryDescription}
              />
            </div>
          </div>
          {formData.secondaryImage.length !== 0 ?
            <div>
              <img src={formData.secondaryImage} alt="uploaded secondary image"/>
            </div>
            :
            <div className="FIELD">
              <label htmlFor="secondaryImages">Secondary Images</label>
              <div>
                <input 
                  type="file"
                  name="secondaryImages"
                  id="secondaryImages"
                  accept="image/png, image/jpeg"
                  placeholder="Secondary Images"
                  onChange={handleSecondaryImageUpload}
                  value={formData.secondaryImage}
                />
              </div>
            </div>
          }  
          <div className="FIELD">
            <label htmlFor="categoryTag">Category Tag</label>
            <Select 
              name='categoryTag'
              placeholder='Choose Tag'
              isMulti
              options={categoryTags}
              onChange={handleSelectInputChange}
              value={formData.categoryTag}
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

export default ProjectEdit