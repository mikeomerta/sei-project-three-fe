
function Home() {
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
          <div className='recently-added-hp-cards'>
            <ul>
              <li><a href="recent-hp-cards">latest project</a></li>
              <li><a href="recent-hp-cards">2nd latest project</a></li>
              <li><a href="recent-hp-cards">3nd latest project</a></li>
            </ul>
          </div>
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

