import css from './DayProducts.module.css';
import ProductsTable from './productsTable/ProductsTable';
import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';
import { selectDiaryProducts } from '../../redux/diary/diarySelectors';
import { useSelector } from 'react-redux';

import EmList from '../emList/EmList.jsx';

const DayProducts = ({selectedDate}) => {
  const productsInDiary = useSelector(selectDiaryProducts);

  return (
    <div className={css.dayProducts}>
      <div className={css.dayScroll}>
        <div className={css.diaryMen}>
          <h3 className={css.DiaryZag}>Products</h3>
          <Link to="/products" className={css.Butt} state={selectedDate}>
            Add product
            <svg className={css.iconStrilka} width="16px" height="16px">
              <use href={`${sprite}#icon-next-arrow`}></use>
            </svg>
          </Link>
        </div>
        {productsInDiary.length === 0 ? (
          <EmList itemName={'products'} />
        ) : (
          <ProductsTable products={productsInDiary} />
        )}
      </div>
    </div>
  );
};

export default DayProducts;
