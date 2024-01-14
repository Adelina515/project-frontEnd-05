//import css from "./EmptyList.module.css";
import PropTypes from 'prop-types';

const EmList = ({ itemName }) => {
  return (
    <div>
      <p>Not found {itemName}</p>
    </div>
  );
};


EmList.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default EmList;