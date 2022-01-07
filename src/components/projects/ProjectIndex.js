import React from 'react'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../lib/api'

function ProjectIndex() {
  const [projects, setProjects] = React.useState([])
  const [keyword, setKeyword] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllProjects()
        setProjects(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <section>
        <div className='title-and-search'>
          <h1>Projects</h1>
          <input 
            placeholder='Search by project name' 
            type='text'
            id='input'
            onChange={handleSearch}
            value={keyword}
          />
        </div>
        <div className='index-menu'>
          <div className='categories-div'>
            <button>Latest</button>
            <button>For You</button>
            <button>Archive</button>
            <button>Categories</button>
          </div>
          <div className='button'>
            <Link to={'/projects/create'}><button>Add Project</button></Link>
          </div>
        </div>
      </section>
      <section>
        <div className='index-projects'>
          {projects.filter(project => {
            if (keyword === '') {
              return project
            } else if (project.projectTitle.toLowerCase().includes(keyword.toLowerCase())) {
              return project
            }
          }).map(project => (
            <div key={project._id} className='index-projects-indivdual'>
              <Link to={`/projects/${project._id}`}>
                <img 
                  src={project.primaryImage}
                  alt={project.projectTitle}
                  className='index-projects-indivdual-elements'
                />
                <h3 className='index-projects-indivdual-elements'>{project.projectTitle}</h3>
                <p className='index-projects-indivdual-elements'>{project.primaryDescription}</p>
                <p className='user-and-time'>Created By: {project.addedBy.username}</p>
                <p className='user-and-time'>Date Created: {project.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectIndex