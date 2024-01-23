import css from './ProductsFilters.module.css';
import svg from '../../img/sprite/symbol-defs.svg';
import { useEffect, useState } from 'react';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/productsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/products/productsSelectors';
import { interFilter } from '../../redux/products/prFiltersSlice';
import { useDebouncedCallback } from 'use-debounce';

const initOpen = { category: false, allowed: false };

export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const [query, setQuery] = useState('');
  const [isOpen, setOpen] = useState(initOpen);
  const filters = useSelector(selectFilter);

  const handleOpen = e => {
    const type = e.currentTarget.dataset.type;
    setOpen(prev => ({ ...initOpen, [type]: !prev[type] }));
  };
  const handlePick = e => {
    if (e.target.nodeName !== 'LI') return;
    const type = e.currentTarget.dataset.type;
    let value;
    if (e.target.textContent === 'Recommended') {
      value = 'yes';
    } else if (e.target.textContent === 'Not recommended') {
      value = 'no';
    } else {
      value = e.target.textContent;
    }

    const addFilter = { ...filters, [type]: value };
    dispatch(interFilter(addFilter));
    dispatch(fetchProducts(addFilter));
    setOpen(initOpen);
  };
  const handleQuery = e => {
    setQuery(e.target.value);
    debounced(query);
  };
  const resetQuery = () => {
    setQuery('');
    const addInput = { ...filters, searchQuery: '' };
    dispatch(interFilter(addInput));
    dispatch(fetchProducts(addInput));
  };
  const debounced = useDebouncedCallback(query => {
    const addInput = { ...filters, searchQuery: query };
    dispatch(interFilter(addInput));
    dispatch(fetchProducts(addInput));
  }, 300);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchCategories();
      setCategories(result);
    };
    getCategories();
  }, []);

  return (
    <div className={css.filters}>
      <p className={css.text}>Filters</p>
      <div className={css.search}>
        <svg className={css.svgSearch}>
          <use href={`${svg}#icon-search`}></use>
        </svg>
        <input
          className={css.input}
          type="text"
          placeholder="Search"
          id="productsSearch"
          onChange={handleQuery}
          value={query}
        />
        <svg className={css.svgSearchClose} onClick={resetQuery}>
          <use href={`${svg}#icon-close-in-search`}></use>
        </svg>
      </div>
      <div className={css.categories}>
        <p
          className={css.filterLabel}
          onClick={handleOpen}
          data-type="category"
        >
          {filters.category === '' ? 'Categories' : filters.category}
        </p>
        <svg
          className={`${css.svgSearch} ${isOpen.category ? css.arrowCat : ''}`}
        >
          <use href={`${svg}#icon-arrow-down`}></use>
        </svg>
        {isOpen.category && (
          <div className={css.filterListWrapper}>
            <ul
              className={css.filterList}
              onClick={handlePick}
              data-type="category"
            >
              {categories.map((item, index) => {
                return (
                  <li className={css.filterItem} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className={css.recommended}>
        <p className={css.filterLabel} onClick={handleOpen} data-type="allowed">
          {filters.allowed === 'All' && 'All'}
          {filters.allowed === 'yes' && 'Recommended'}
          {filters.allowed === 'no' && 'Not recommended'}
        </p>
        <svg
          className={`${css.svgSearch} ${isOpen.allowed ? css.arrowRec : ''}`}
        >
          <use href={`${svg}#icon-arrow-down`}></use>
        </svg>
        {isOpen.allowed && (
          <ul
            className={css.recommendedList}
            onClick={handlePick}
            data-type="allowed"
          >
            <li className={css.filterItem}>All</li>
            <li className={css.filterItem}>Recommended</li>
            <li className={css.filterItem}>Not recommended</li>
          </ul>
        )}
      </div>
    </div>
  );
};
