
import plantList from '../datas/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList() {
  return (
    <section className="shopping-list" id="collection">
      <div className="collection-heading">
        <div>
          <span className="section-kicker">THE FLOWER EDIT</span>
          <h2>
            Pick your <span>pretty petals</span>
          </h2>
        </div>

        <p className="collection-count">
          {plantList.length} blooms to love ♡
        </p>
      </div>

      <div className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id}
            id={plant.id}
            cover={plant.cover}
            name={plant.name}
            category={plant.category}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </div>
    </section>
  );
}

export default ShoppingList;
