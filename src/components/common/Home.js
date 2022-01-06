
function Home() {
  return (
    <div>
      <header>
        <div className="menu">
          logo here
        </div>
        <div className="search-bar">
            searchbar here
        </div>
        <div className="favourites">
          favourites here
        </div>
        <button className="sign-up">
          sign up
        </button>
        <button className="login">
          login
        </button>
        <br />
        <nav className="catergories">
          <ul>
            <li><a href="#menswear">Menswear</a></li>
            <li><a href="#womenswear">Womenswear</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero"> 
          <h2>BUY. SELL.
  DISCOVER UNIQUE WEBSITES.
          </h2>
          <h3>
    designer. Preloved. Vintage. Streetwear. Sneakers. Whatever your style. Find it on Eepop.
          </h3>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Home

