import React from 'react'
import { getAllProjects } from '../lib/api'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { Link } from 'react-router-dom'

function Favourites() {
  const [projects, setProjects] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !projects && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllProjects()
        setProjects(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <div className='index'>
      <section>
        <div className='index-title'>
          <div>
            <h1>Your Favourites:</h1>
          </div>
        </div>
      </section>
      <section>
        {isLoading && <Loading />}
        {isError && <Error />}
        {projects &&
        <div className='index-gallery'>
          {projects.filter(project => {
            return project.favouritedBy.length > 0
          }).map(project => (
            <div key={project._id} className='index-card'>
              <Link to={`/projects/${project._id}`}>
                <img 
                  src={project.primaryImage}
                  alt={project.projectTitle}
                  className='index-img'
                />
                <div className='index-info'>
                  <h3 className='gallery-title'>{project.projectTitle}</h3>
                  <p className='gallery-title'>{project.primaryDescription}</p>
                  <p className='user'>Created By: {project.addedBy.username}</p>
                  <p className='user'>Date Created: {project.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        }
      </section>
    </div>
  )
}

export default Favourites