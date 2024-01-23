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
// import { selectDiaryProducts } from '../../redux/diary/diarySelectors';
export const ProductsList = ({ openModal }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectProducts);
  const error = useSelector(selectError);
  const diary = useSelector(state => state.diary);
  // const productsdiary = useSelector(selectDiaryProducts);
  // const userProfile = useSelector(state => state);
  // console.log(productsdiary);
  // const filter = useSelector(selectFilter);
  console.log(diary);
  // console.log(userProfile);
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
