import css from './ProductsList.module.css';
import { ProductsListItem } from './productsItem/ProductsItem';
export const ProductsList = ({ openModal }) => {
  return (
    <ul className={css.productsList}>
      <ProductsListItem openModal={openModal} />
    </ul>
  );
};
