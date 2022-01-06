import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'


function ProjectShow() {
  const { projectId } = useParams()
  const [project, setProject] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/projects/${projectId}`)
        setProject(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [projectId])

  console.log(project)

  return (
    <section>
      {/* <div className='center'>
        <div>
          <h1>{project.projectTitle}</h1>
        </div>
        <div>
          <button>Add To Favourites ❤️</button>
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
      </div> */}
    </section>
  )
}

export default ProjectShow