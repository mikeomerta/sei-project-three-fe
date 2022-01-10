
import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { deleteProject, getSingleProject } from '../lib/api'
import { isOwner } from '../lib/auth'
import Error from '../common/Error'
import Loading from '../common/Loading'


function ProjectShow() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !project && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProject(projectId)
        setProject(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [projectId])

  console.log(project)

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
      {isLoading && <Loading />}
      {isError && <Error />}
      {project &&
        <div className='show'>
          <div className='left-side show-primary-image'>
            <img 
              src={project.primaryImage} 
              alt={project.projectTitle}
            />
          </div>
          <div className='right-side'>
            <h1>{project.projectTitle}</h1>
            <p className='user-show'>Created By: {project.addedBy.username}</p>
            <p className='user-show'>Date Created: {project.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
            <div className='buttons'>
              {!isOwner(project.addedBy._id) ? ( 
                <button className='favourites'>
                  <img 
                    src='https://i.imgur.com/hN82Ce2.png'
                    className='show-icons' 
                  />
                  <p>Add To Favourites</p>
                </button>
              ) : (
                <>
                  <Link to={`/projects/${projectId}/edit`}>
                    <button>
                      <img 
                        src='https://i.imgur.com/nqQ6yj1.png'
                        className='show-icons' 
                      />
                    </button>
                  </Link>
                  <button onClick={handleDelete}>
                    <img 
                      src='https://i.imgur.com/ygGtZOs.png' 
                      className='show-icons'
                    />
                  </button>
                </>)}
            </div>
            <h4>{project.primaryDescription}</h4>
            <p className='description-show'>{project.secondaryDescription}</p>
          </div>
          {/* <div className='show-primary-image'>
            <img 
              src={project.secondaryImage.map(image => {
                console.log(image)
              })} 
              alt={project.projectTitle} />
          </div> */}
        </div>
      }
    </section>
  )
}

export default ProjectShow