import { Link, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../lib/auth'
import React from 'react'
// import { getAllProjects } from '../lib/api'
// import Error from '../common/Error'
// import Loading from '../common/Loading'


function Home() {
  // const [projects, setProjects] = React.useState([])
  // const [isError, setIsError] = React.useState(false)
  // const isLoading = !projects && !isError

  const isAuth = isAuthenticated()
  useLocation()

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await getAllProjects()
  //       setProjects(res.data)
  //     } catch (err) {
  //       setIsError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <>
      <div className='home'>
        <section>
          <div className='secondary-nav'>
            <Link to="/projects">Latest</Link>
            <Link to="/projects">For You</Link>
            <Link to="/projects">Archive</Link>
            <Link to="/projects">Catagories</Link>
          </div>
        </section>
        <section>
          <div className='hero'>
            <h1>Create. Share.<br />Discover Unique <br />Projects.</h1>
            <p className='hero-para'>Advertising. Animation. Art. Gaming. Graphic Design. Health. Illustration. Music. Photography. Writing. Whatever your style. Find it on Epop.</p>
          </div>
        </section>
        <section>
          <div className='projects-we-love-title'>
            <h3 id='projects-we-love-title'>Projects we love</h3>
          </div>
          <div className='projects-we-love'>
            {/* {projects.map(project => (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <img 
                    src={project.primaryImage}
                    alt={project.projectTitle}
                  />
                  <h3>{project.projectTitle}</h3>
                  <p>{project.primaryDescription}</p>
                  <p>Created By: {project.addedBy.username}</p>
                  <p>Date Created: {project.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
                </Link>
              </div>
            ))} */}
          </div>
        </section>
        <section>
          <div className='home-section'>
            <div>
              <h3>What is Epop</h3>
              <p>Epop is the creators marketplace where the next generation come to discover unique ideas and projects. With a global community connecting to make web-development more inclusive, diverse and less wasteful. This is what transforming the internet looks like.</p>
              <Link to="/register"><button className='home-button'>Get Started</button></Link>
            </div>
            <div>
              <img className='home-img' src='https://images1.the-dots.com/4707805/that-kind-better-off-alone-copy.jpg?p=projectImageFullJpg' />
            </div>
          </div>
        </section>
        <section>
          <div className='home-section'>
            <div>
              <img className='home-img' src='https://images1.the-dots.com/4604811/hat-illustration.jpg?p=projectImageFullJpg' />
            </div>
            <div>
              <h3>Find inspiration</h3>
              <p>Browse the latest creators you know and love. Discover independent brands making waves and the creators behind them. Whatever you are into, find the project and the creator for you on Epop.</p>
              <Link to="/projects"><button className='home-button'>Explore</button></Link>
            </div>
          </div>
        </section>
        <section>
          <div className='home-section'>
            <div>
              <h3>About Us</h3>
              <p>This project was created by Beta Than Meta (David.H, Harry.M, Holly.P, Michael.E). Inspired by Depop and The Dots, this project is to showcase the skills we have learnt in designing and building a full stack application. We hope you enjoy it.</p>
              {isAuth ? (
                <>
                  <Link to="/projects/create"><button className='home-button'>Add projects</button></Link>
                </>
              ) : (
                <>
                  <Link to="/login"><button className='home-button'>Add projects</button></Link>
                </>
              )}
            </div>
            <div>
              <img className='home-img' src='https://i.imgur.com/YZa7eLX.png' />
            </div>
          </div>
        </section>
        <section>
          <h2>Be part of the community transforming the creative industries one project at a time.</h2>
        </section>
      </div>
    </>
  )
}

export default Home

