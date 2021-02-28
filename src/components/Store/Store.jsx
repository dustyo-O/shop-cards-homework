import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { VIEW_LIST, VIEW_MODULE } from '../../constants';

import CardsView from '../CardsView/CardsView';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';

import './Store.css';

const VIEWS = [VIEW_MODULE, VIEW_LIST];
const DEFAULT_VIEW_INDEX = 0;

export default function Store({ products }) {
  const [view, setView] = useState(VIEWS[DEFAULT_VIEW_INDEX]);

  const onToggleView = () => {
    setView(prev => VIEWS.find(view => view !== prev));
  };

  return (
    <div className="Store">
      <div class="Store-Switch">
        <IconSwitch icon={view} onSwitch={onToggleView}/>
      </div>
      {view === VIEWS[0] ? <CardsView items={products}/> : <ListView items={products}/>}
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired
};
