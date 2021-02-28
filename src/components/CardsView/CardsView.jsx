import { PropTypes } from 'prop-types';

import CardsViewShopCard from './ShopCard/ShopCard';

import './CardsView.css';

export default function CardsView({ items }) {
  return (
    <div className="CardsView">
      {items.map((item, index) => (<CardsViewShopCard key={index} {...item} />))}
    </div>
  );
}

CardsView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired
};
