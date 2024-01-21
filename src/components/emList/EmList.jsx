import css from "./EmList.module.css";
/*import PropTypes from 'prop-types';*/

const EmList = ({ itemName }) => {
  return (
    <div className={css.notTextCont}>
      <p className={css.notText}>Not found {itemName}</p>
    </div>
  );
};


/*EmList.propTypes = {
  listName: PropTypes.string.isRequired,
};*/

export default EmList;