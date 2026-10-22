
import Banner from './components/Banner';
import ShoppingList from './components/ShoppingList';
import './styles/App.css';

function App() {
  return (
    <div className="her-bloom-app">
      <Banner>
        <span className="banner-eyebrow">
          A LITTLE FLOWER MAGIC
        </span>

        <h1>
          Let yourself <span>bloom.</span>
        </h1>

        <p>
          Des fleurs délicates, des couleurs douces et
          des petits bonheurs pour illuminer chaque journée.
        </p>

        <a href="#collection" className="banner-button">
          Explorer les fleurs →
        </a>
      </Banner>

      <main>
        <section className="intro-section" id="about">
          <span className="section-kicker">
            A PETAL FOR EVERY MOOD ♡
          </span>

          <h2>
            Flowers for your <span>soft era</span>
          </h2>

          <p>
            Des roses romantiques aux tulipes pastel,
            trouve les fleurs qui correspondent à ton univers.
          </p>
        </section>

        <ShoppingList />

        <section className="love-note">
          <span className="love-note-icon">♡</span>

          <div>
            <h2>Dear girl, keep growing.</h2>
            <p>
              Chaque fleur s'épanouit à son rythme.
              Offre-toi la même douceur.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>HER BLOOM STUDIO ♡</p>
        <span>Flowers, feelings & little things.</span>
      </footer>
    </div>
  );
}

export default App;
