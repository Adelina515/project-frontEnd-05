import css from './products.module.css';
import TitlePage from 'components/TitlePage/TitlePage';
import { ProductsFilters } from 'components/productsFilters/ProductsFilters';
import { ProductsList } from 'components/productsList/ProductsList';
// import { ProductsModal } from 'components/productsModal/ProductsModal';
import { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { AddProductForm } from 'components/addProductForm/AddProductForm';
import { BasicModalWindow } from '../../modal/basicModalWindow/BasicModalWindow';
const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const handleClose = e => {
    setOpen(false);
  };

  const handleOpen = data => {
    setOpen(true);
    setModal(data);
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
      {/* <div className={css.container}></div> */}
      <BasicModalWindow isOpen={open} onClose={handleClose} data={modal}>
        <AddProductForm data={modal} />
      </BasicModalWindow>
    </div>
  );
};
export default ProductsPage;
