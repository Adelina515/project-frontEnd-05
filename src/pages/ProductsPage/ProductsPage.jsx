import css from './products.module.css';
import TitlePage from 'components/TitlePage/TitlePage';
import { ProductsFilters } from 'components/productsFilters/ProductsFilters';
import { ProductsList } from 'components/productsList/ProductsList';
import { ProductsModal } from 'components/productsModal/ProductsModal';
import { useState } from 'react';
import { Container } from '../../components/Container/Container';

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = e => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
      <ProductsModal isOpen={open} onClose={handleClose} />
    </div>
  );
};
export default ProductsPage;
