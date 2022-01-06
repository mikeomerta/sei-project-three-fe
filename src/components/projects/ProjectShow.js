// import React from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router'


function projectShow() {
  // const { projectId } = useParams()
  // const [project, setProject] = React.useState(null)

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = XXXX
  //       setProject(res.data)
  //     } catch (err) {
  //       console.log()
  //     }
  //   }
  //   getData()
  // }, [projectId])

  return (
    <section>
      <div className = "body-container">
        <div className = "header-container">
          <div className = "project-title">
            <h1>
          Project Title
            </h1>
          </div>
          <div className = "button-container">
            <div>
              <button>Favourite</button>
            </div>
            <div>
              <button>Donate Epop Dollars</button>
            </div>
          </div>
        </div>
        <div className = "hero-container">
          <div>
            <img 
              src='https://www.placecage.com/1200/400'
              alt="hero"
            />
          </div>
        </div>
        <div className = "description-container">
          <div>
            <h3>
              <i>Primary Description</i>
              <br />
              Bacon ipsum dolor amet strip steak hamburger jowl, short loin cupim doner drumstick cow leberkas capicola andouille pastrami porchetta t-bone beef ribs. Spare ribs burgdoggen turducken t-bone pastrami rump.
            </h3>
          </div>
          <div>
            <h4>
              <i>Secondary Description</i>
              <br />
          Hamburger ham burgdoggen, frankfurter chicken meatloaf tri-tip beef ribs shankle rump pastrami pork loin sirloin salami. Andouille bacon sirloin biltong frankfurter jowl corned beef, fatback t-bone bresaola alcatra ham. Shoulder boudin chuck beef alcatra picanha pastrami pig ball tip. Filet mignon prosciutto sirloin fatback ball tip chislic pork meatloaf salami ground round.
            </h4>
          </div>
        </div>  
        <div>
          <div className = "secondary-image-container">
            <img 
              src='https://www.placecage.com/400/400'
              alt="secondary image one"
            />
            <img 
              src='https://www.placecage.com/c/400/400'
              alt="secondary image two"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default projectShow