import css from "./EmList.module.css";


const EmList = ({ itemName }) => {
  return (
    <div className={css.notTextCont}>
      <p className={css.notText}>Not found {itemName}</p>
    </div>
  );
};




export default EmList;