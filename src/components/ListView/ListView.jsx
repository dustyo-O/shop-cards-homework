import { PropTypes } from 'prop-types';

import ListViewShopItem from './ShopItem/ShopItem';

import './ListView.css';

export default function ListView({ items }) {
  return (
    <div className="ListView">
      {items.map(item => (<ListViewShopItem {...item} />))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired
};
