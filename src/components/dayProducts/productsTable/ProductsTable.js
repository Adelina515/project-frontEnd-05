import css from './ProductsTable.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';



const ProductsTable = (props) => {
      const { products } = props; // Отримуємо products з props

    const capitalizedWord = (word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
};
    return (
       <ul className={css.diaryList}>
      {products.map(
        ({ _id, title, category, calories, amount, recommended }, i) => {
          return (
            <li key={nanoid()} className={css.diaryItem}>
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
                    <td className={css.nameValue}>{amount}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Recommend</th>
                    <td className={css.nameValue}>
                      <div className={`${css.recommendCont}`}>
                        <span
                          className={
                            recommended
                              ? `${css.productRecommend}`
                              : `${css.productNotRecommend}`
                          }
                        ></span>
                        {recommended ? 'Yes' : 'No'}
                      </div>
                    </td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={`${css.nameCateg} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td>Кошик</td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        }
      )}
    </ul>
  );

}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;

