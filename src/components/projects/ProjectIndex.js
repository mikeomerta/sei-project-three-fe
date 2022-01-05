import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProjectIndex() {
  const [projects, setProjects] = React.useState([])
  const [keyword, setKeyword] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('api/projects')
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
            placeholder='Search by website, user or catagory' 
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
            <button>Add Project</button>
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
            <div key={project._id}>
              <Link to={`/projects/${project._id}`}>
                <img 
                  src={project.primaryImage}
                  alt={project.projectTitle}
                  className='index-projects-indivdual'
                />
                <h3 className='index-projects-indivdual'>{project.projectTitle}</h3>
                <p className='index-projects-indivdual'>{project.primaryDescription}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectIndex