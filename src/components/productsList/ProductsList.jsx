import { useDispatch, useSelector } from 'react-redux';
import css from './ProductsList.module.css';
import { ProductsListItem } from './productsItem/ProductsItem';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/products/productsOperations';
import {
  selectProducts,
  selectFilter,
} from '../../redux/products/productsSelectors';
export const ProductsList = ({ openModal }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectProducts);
  const filter = useSelector(selectFilter);
  console.log(filter);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <ul className={css.productsList}>
      {data &&
        data.map(({ _id, ...card }) => {
          return (
            <ProductsListItem key={_id} data={card} openModal={openModal} />
          );
        })}
    </ul>
  );
};
