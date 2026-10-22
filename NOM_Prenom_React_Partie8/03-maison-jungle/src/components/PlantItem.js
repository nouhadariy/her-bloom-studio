
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ id, cover, name, category, water, light }) {
  return (
    <article className="lmj-plant-item" key={id}>
      <div className="plant-image-wrapper">
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={name}
          loading="lazy"
        />

        <span className="plant-badge">Made with love ♡</span>

        <button
          className="plant-favorite"
          onClick={() => alert(`${name} ♡`)}
        >
          ♡
        </button>
      </div>

      <div className="plant-card-content">
        <p className="plant-category">{category}</p>
        <h3>{name}</h3>

        <div className="plant-care">
          <CareScale careType="light" scaleValue={light} />
          <CareScale careType="water" scaleValue={water} />
        </div>

        <div className="plant-card-footer">
          <span className="plant-price">À partir de 89 DH</span>
          <button
            className="plant-add-button"
            onClick={() => alert(`${name} sélectionnée ♡`)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default PlantItem;
