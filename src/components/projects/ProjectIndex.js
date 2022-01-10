import React from 'react'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function ProjectIndex() {
  const [projects, setProjects] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
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

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  console.log('proj index', projects)
  return (
    <div className='index'>
      <section>
        <div className='secondary-nav'>
          <Link to="/projects">Latest</Link>
          <Link to="/projects">For You</Link>
          <Link to="/projects">Archive</Link>
          <Link to="/projects">Catagories</Link>
        </div>
      </section>
      <section>
        <div className='index-title'>
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <input 
              placeholder='Search by name...' 
              type='text'
              id='input'
              onChange={handleSearch}
              value={keyword}
            />
          </div>
        </div>
      </section>
      <section>
        {isLoading && <Loading />}
        {isError && <Error />}
        {projects &&
        <div className='index-gallery'>
          {projects.filter(project => {
            if (keyword === '') {
              return project
            } else if (project.projectTitle.toLowerCase().includes(keyword.toLowerCase())) {
              return project
            }
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

export default ProjectIndex