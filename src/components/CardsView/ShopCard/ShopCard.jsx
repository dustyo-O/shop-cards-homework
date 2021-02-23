import { PropTypes } from 'prop-types';
import AddToCart from '../../AddToCart/AddToCart';

import './ShopCard.css';

export default function CardsViewShopCard({ name, price, color, img }) {
  return (
    <div className="CardsView-ShopCard">
      <h1 className="CardsView-ShopCardTitle">{name}</h1>
      <small className="CardsView-ShopCardSubtitle">{color}</small>
      <div
        className="CardsView-ShopCardImage"
        style={{ backgroundColor: color, backgroundImage: 'url(' + img + ')' }}
      />
      <footer className="CardsView-ShopCardFooter">
        <div className="CardsView-ShopCardPrice">${price}</div>
        <div className="CardsView-AddToCart"><AddToCart/></div>
      </footer>
    </div>
  );
}

CardsViewShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
