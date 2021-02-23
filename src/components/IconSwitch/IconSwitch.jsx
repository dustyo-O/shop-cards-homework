import { PropTypes } from 'prop-types';
import { ViewList, ViewModule } from '@material-ui/icons';

export default function IconSwitch({ icon, onSwitch }) {
  const onIconClick = () => {
    onSwitch();
  };

  return (
    <div className="IconSwitch" onClick={onIconClick}>
      { icon === 'view_list' ? <ViewList/> : <ViewModule/> }
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
