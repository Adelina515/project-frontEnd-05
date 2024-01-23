import { useDispatch, useSelector } from 'react-redux';
import css from './ProductsList.module.css';
import { ProductsListItem } from './productsItem/ProductsItem';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/products/productsOperations';
import {
  selectError,
  selectProducts,
} from '../../redux/products/productsSelectors';
import { ProductsError } from './productsError/ProductsError';
import { fetchAllDiary } from '../../redux/diary/diaryOperations';
export const ProductsList = ({ openModal }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectProducts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllDiary('2024-01-18'));
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {error ? (
        <ProductsError />
      ) : (
        <ul className={css.productsList}>
          {data &&
            data.map(card => {
              return (
                <ProductsListItem
                  key={card._id}
                  data={card}
                  openModal={openModal}
                />
              );
            })}
        </ul>
      )}
    </>
  );
};
