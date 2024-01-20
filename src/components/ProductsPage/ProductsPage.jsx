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
const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [calories, setCalories] = useState(0);
  // const diary = useSelector(state=> state.diary)
  // console.log(diary)
  const isSuccess = useSelector(selectSuccess);
  // const products = useSelector(state => state.products);
  // console.log(products);
  // console.log('isSuccess', isSuccess);
  const handleClose = e => {
    setOpen(false);
  };
  const handleOpen = data => {
    setOpen(true);
    setModal(data);
  };
  const handleCalories = count => {
    console.log(count);
    setCalories(count);
  };
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
          <AddProductForm data={modal} count={handleCalories} />
        ) : (
          <AddProductSuccess calories={calories} />
        )}
      </BasicModalWindow>
    </div>
  );
};
export default ProductsPage;
