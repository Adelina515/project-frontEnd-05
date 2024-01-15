import css from './DayProducts.module.css';
import ProductsTable from './productsTable/ProductsTable';
import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';
//import { selectDiaryProducts } from '../../redux/diary/diarySelectors';

import EmList from '../emList/EmList.jsx';

const DayProducts = () => {
  //  const diaryProducts = useSelector(selectDiaryProducts);
      const diaryProducts = [
    {
      _id: '1',
      title: 'Product 1',
      category: 'Category 1',
      calories: 100,
      amount: 200,
      recommended: true,
    },]
    return (
        <div className = {css.dayProducts}>
            <div className = {css.dayScroll}>
                <div className={ css.diaryMen}> 
                    <h3 className = {css.DiaryZag}>Products</h3>
                    <Link to="/products" className={css.Butt}>
            Add product
            <svg className={css.iconStrilka} width="98px" height="35px">
              <use href={`${sprite}#icon-next-arrow-gray`}></use>
            </svg>
          </Link>
          </div>
          {diaryProducts.length === 0 ? (
          <EmList itemName={"products"} />
        ) : (
            <ProductsTable products={diaryProducts} />
        )}
            
            </div>

        </div> 
)
}

export default DayProducts;


