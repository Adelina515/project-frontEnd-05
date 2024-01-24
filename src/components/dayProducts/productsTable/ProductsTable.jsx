import { useSelector, useDispatch } from 'react-redux';

import css from './ProductsTable.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';

// import { selectDiaryProducts } from '../../../redux/diary/diarySelectors';
import { deleteProductDiary } from '../../../redux/diary/diaryOperations';
import { selectProducts } from '../../../redux/products/productsSelectors';
// import { useEffect } from 'react';

const ProductsTable = ({ productsInDiary }) => {
  const dispatch = useDispatch();

  // console.log(productsInDiary);
  const products = useSelector(selectProducts);
  console.log('products >>', products);

  const deleteProduct = _id => {
    console.log('_id >>', _id);
    dispatch(deleteProductDiary(_id));
  };
  

  // const userBlood = useSelector(state => state.auth.user.blood);
  // // const { groupBloodNotAllowed } = products;
  // const groupBloodNotAllowed = 1;

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };
  return (
    <ul className={css.diaryList}>
      {productsInDiary.map(
        ({ _id, calories, grams, allowed, productId: { category, title } }) => {
          const handleDelete = (e)=>{
            e.target.closest("li").style.display = "none";
            deleteProduct(_id);
          }
          return (
            <li key={_id} className={css.diaryItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Title</th>
                    <td className={css.nameValue}>{capitalizedWord(title)}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Category</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(category)}
                    </td>
                  </tr>
                </tbody>
                <tbody className={css.elementCont}>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Calories</th>
                    <td className={css.nameValue}>{calories}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Weight</th>
                    <td className={css.nameValue}>{grams}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Recommend</th>
                    <td className={css.nameValue}>
                      <div className={`${css.recommendCont}`}>
                        <svg className={css.statusCircle}>
                          {/* <use href={`${svg}#icon-circle-green`}></use> */}
                          {allowed ? (
                            <use href={`${svg}#icon-circle-green`}></use>
                          ) : (
                            <use href={`${svg}#icon-circle-red`}></use>
                          )}
                        </svg>
                        <p className={css.statusText}>
                          {/* Recommended */}
                          {allowed ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={`${css.nameCateg} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td className={css.iconCentr} onClick={handleDelete}>
                      <svg className={css.iconTresh} width="20px" height="20px">
                        <use href={`${svg}#icon-trash`}></use>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        }
      )}
    </ul>
  );
};

/*ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};*/

export default ProductsTable;
