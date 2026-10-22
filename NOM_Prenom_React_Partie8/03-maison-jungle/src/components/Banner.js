
import '../styles/Banner.css';

function Banner({ children }) {
  return (
    <header className="lmj-banner" id="top">
      <nav className="banner-nav">
        <a href="#top" className="brand">
          <span className="brand-icon">✿</span>
          her bloom
        </a>

        <div className="nav-links">
          <a href="#top">Accueil</a>
          <a href="#collection">Collection</a>
          <a href="#about">Notre univers</a>
        </div>

        <a href="#collection" className="nav-heart">
          ♡ Shop
        </a>
      </nav>

      <div className="banner-content">
        <div className="banner-copy">{children}</div>

        <div className="banner-visual">
          <div className="visual-orbit">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85"
              alt="Bouquet de fleurs"
            />
          </div>

          <div className="floating-note note-top">
            ♡ little joys
          </div>

          <div className="floating-note note-bottom">
            ✿ grow at your pace
          </div>
        </div>
      </div>

      <div className="banner-bottom-label">
        FLOWERS · PLANTS · GOOD VIBES
      </div>
    </header>
  );
}

export default Banner;
