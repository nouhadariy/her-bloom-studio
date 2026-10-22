
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
  const scaleType =
    careType === 'light'
      ? { icon: Sun, label: 'Ensoleillement' }
      : { icon: Water, label: 'Arrosage' };

  return (
    <div className="care-scale">
      <span className="care-label">{scaleType.label}</span>

      <div className="care-icons">
        {[1, 2, 3].map((level) =>
          scaleValue >= level ? (
            <img
              key={level}
              src={scaleType.icon}
              alt=""
              className="care-icon"
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default CareScale;
