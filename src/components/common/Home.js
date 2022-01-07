import { Link, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../lib/auth'

function Home() {
  const isAuth = isAuthenticated()
  useLocation()

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
            <img className='hero-image'/>
            <h1>Create. Share. Discover.</h1>
            <p className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </section>
        <section>
          <div className='projects-we-love-title'>
            <h3 id='projects-we-love-title'>Projects we love</h3>
          </div>
          {/* PlaceHolder */}
          <div className='projects-we-love'>
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
            <img className='projects-we-love-single' src='https://images1.the-dots.com/4599433/ck-18.jpg?p=projectImageFullJpg' />
          </div>
        </section>
        <section>
          <div className='home-section'>
            <div>
              <h3>What is Epop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Link to="/projects"><button className='home-button'>Explore</button></Link>
            </div>
          </div>
        </section>
        <section>
          <div className='home-section'>
            <div>
              <h3>Create your way</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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

