
import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { deleteProject, getSingleProject } from '../lib/api'


function ProjectShow() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProject(projectId)
        setProject(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [projectId])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(projectId)
        navigate('/projects')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section>
      {project ? (
        <div className='center'>
          <div>
            <h1>{project.projectTitle}</h1>
          </div>
          <div>
            <button>Add To Favourites ❤️</button>
            <Link to={`/projects/${projectId}/edit`}><button>Edit Your Project </button></Link>
            <button onClick={handleDelete}>
              <img 
                src='https://i.imgur.com/ygGtZOs.png' 
                className='show-icons'
              />
            </button>
          </div>
          <div>
            <h3>{project.primaryDescription}</h3>
          </div>
          <div className='show-primary-image'>
            <img src={project.primaryImage} alt={project.projectTitle} />
          </div>
          <div>
            <p>{project.secondaryDescription}</p>
          </div>
          <div className='show-primary-image'>
            <img 
              src={project.secondaryImage.map(image => {
                console.log(image)
              })} 
              alt={project.projectTitle} />
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </section>
  )
}

export default ProjectShow