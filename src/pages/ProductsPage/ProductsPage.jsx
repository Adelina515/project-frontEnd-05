import css from './products.module.css';
import TitlePage from 'components/TitlePage/TitlePage';
import { ProductsFilters } from 'components/productsFilters/ProductsFilters';
import { ProductsList } from 'components/productsList/ProductsList';
import { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { AddProductForm } from 'components/addProductForm/AddProductForm';
import { BasicModalWindow } from '../../modal/basicModalWindow/BasicModalWindow';
import { useSelector } from 'react-redux';
import { AddProductSuccess } from 'components/addProductSuccess/AddProductSuccess';
import { selectSuccess } from '../../redux/products/productsSelectors';
import { useLocation } from 'react-router-dom';
import formatDate from 'function/formatData';
const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [calories, setCalories] = useState(0);
  const location = useLocation();
  const dateDiary = location.state;
  const isSuccess = useSelector(selectSuccess);
  // const auth = useSelector(state => state.auth);
  // console.log(auth);
  // const newDate = () => {
  //   const rawDate = new Date();
  //   const newDate = formatDate(rawDate);
  //   return newDate;
  // };

  // const stateDiary = useSelector(state => state.diary);
  // console.log(stateDiary, 'state');
  const convertDate = date => {
    let rawDate;
    date ? (rawDate = date) : (rawDate = new Date());
    const newDate = formatDate(rawDate);
    return newDate;
  };

  const handleClose = e => {
    setOpen(false);
  };
  const handleOpen = data => {
    setOpen(true);
    setModal(data);
  };
  const handleCalories = count => {
    // console.log(count);
    setCalories(count);
  };
  const date = convertDate(dateDiary);
  // console.log('finalDate', date);
  return (
    <div className={css.productsPage}>
      <Container>
        <div className={css.wrapper}>
          <TitlePage children="Products" className={css.wrapper} />
          <ProductsFilters />
          <ProductsList openModal={handleOpen} />
        </div>
      </Container>
      <BasicModalWindow isOpen={open} onClose={handleClose}>
        {!isSuccess ? (
          <AddProductForm data={modal} count={handleCalories} date={date} />
        ) : (
          <AddProductSuccess calories={calories} />
        )}
      </BasicModalWindow>
    </div>
  );
};
export default ProductsPage;
