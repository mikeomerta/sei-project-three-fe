import React from 'react'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'


function Home() {
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

  // const handleSearch = (e) => {
  //   setKeyword(e.target.value)
  // }

  return (
    <div>
      <header className="header">
        <div className="menu">
          logo here
        </div>
        <div className="search-bar">
            searchbar here
        </div>
        <button className="favourites">
          favourites here
        </button>
        <button className="sign-up">
          sign up
        </button>
        <button className="login">
          login
        </button>
        <br />
        <nav className="catergories">
          <ul>
            <button><a href="#catergory-link">Content Catergory 1</a></button>
            <button><a href="#catergory-link">Content Catergory 2</a></button>
            <button><a href="#catergory-link">Content Catergory 3</a></button>
            <button><a href="#catergory-link">Content Catergory 4</a></button>
          </ul>
        </nav>
      </header>
      
      <br />

      <main>
        <div className="hero-hp">
          <div>
          
            <h2>BUY. SELL.
  DISCOVER UNIQUE WEBSITES.
            </h2>
            <h3>
    designer. Preloved. Vintage. Streetwear. Sneakers. Whatever your style. Find it on Eepop.
            </h3>
          </div>
        </div>

        <br />

        <div className='recently-added-hp'>
          <div className='hp-subtitle'> Recently Added Projects</div>
          <section>
            {isLoading && <Loading />}
            {isError && <Error />}
            {projects &&
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
            }
          </section>
        </div>

        <br />

        <div className='about-eepop'>
          <div className='hp-subtitle'> About Eepop</div>
          <div className='hp-text'>
            <h4>
              Eepop is a place where web developers can share ideas, bacon ipsum dolor amet t-bone jerky bresaola, landjaeger tongue sausage andouille rump porchetta pork spare ribs turkey chicken ball tip. Ground round beef ribs buffalo bresaola cow pastrami shoulder pork loin tongue. Short loin jowl filet mignon turkey. Bresaola ribeye brisket jowl, pork loin shankle kielbasa turducken short ribs buffalo porchetta.
            </h4>
            <button className='sign-up'>
              Get Started (register link)
            </button>
          </div>
        </div>

        <br />

        <div className='about-us'>
          <div className='hp-subtitle'> About Us</div>
          <div className='hp-text'>
            <h4>
              This is the 3rd project on general assemble Software engineering course. Bacon ipsum dolor amet t-bone jerky bresaola, landjaeger tongue sausage andouille rump porchetta pork spare ribs turkey chicken ball tip. Ground round beef ribs buffalo bresaola cow pastrami shoulder pork loin tongue. Short loin jowl filet mignon turkey. Bresaola ribeye brisket jowl, pork loin shankle kielbasa turducken short ribs buffalo porchetta.
            </h4>
          </div>
        </div>
      </main>

      <br />

      <footer>
        <div className='footer-links'>
          <ul>
            <button><a href="footer-button">About</a></button>
            <button><a href="footer-link">Privacy</a></button>
            <button><a href="footer-link">Social Media Links</a></button>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home

