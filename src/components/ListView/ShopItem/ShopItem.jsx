import { PropTypes } from 'prop-types';

import AddToCart from '../../AddToCart/AddToCart';

import './ShopItem.css';

export default function ListViewShopItem({ name, price, color, img }) {
  return (
    <>
      <div className="ListView-ShopItemCell ListView-ShopItemImageCell"><img className="ListView-ShopItemImage" src={img}/></div>
      <div className="ListView-ShopItemCell ListView-ShopItemName">{name}</div>
      <div className="ListView-ShopItemCell ListView-ShopItemColor">{color}</div>
      <div className="ListView-ShopItemCell ListView-ShopItemPrice">${price}</div>
      <div className="ListView-ShopItemCell ListView-ShopItemAdd"><AddToCart/></div>
    </>
  );
}

ListViewShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
