import css from './ProductsFilters.module.css';
import svg from '../../img/sprite/symbol-defs.svg';
import { useState } from 'react';
// import { useDebounce } from 'use-debounce';

const data = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];
const initParams = {
  search: '',
  category: '',
  recommended: '',
};
const initOpen = { category: false, recommended: false };

export const ProductsFilters = () => {
  const [query, setQuery] = useState('');
  const [params, setParams] = useState(initParams);
  const [isOpen, setOpen] = useState(initOpen);

  const handleOpen = e => {
    const type = e.currentTarget.dataset.type;
    setOpen(prev => ({ ...initOpen, [type]: !prev[type] }));
  };
  const handlePick = e => {
    if (e.target.nodeName !== 'LI') return;
    const type = e.currentTarget.dataset.type;

    setParams({ ...params, [type]: e.target.textContent });
    setOpen(initOpen);
  };
  const handleQuery = e => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const resetQuery = () => {
    setQuery('');
  };
  return (
    <div className={css.filters}>
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
          {params.category === '' ? 'Categories' : params.category}
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
              {data.map((item, index) => {
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
        <p
          className={css.filterLabel}
          onClick={handleOpen}
          data-type="recommended"
        >
          {params.recommended === '' ? 'All' : params.recommended}
        </p>
        <svg
          className={`${css.svgSearch} ${
            isOpen.recommended ? css.arrowRec : ''
          }`}
        >
          <use href={`${svg}#icon-arrow-down`}></use>
        </svg>
        {isOpen.recommended && (
          <ul
            className={css.recommendedList}
            onClick={handlePick}
            data-type="recommended"
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
