import React from 'react';
import css from "./style.module.css"
import svg from '../../../img/sprite/symbol-defs.svg';

function Pagination({page, setPage, pagesTotal}) {
    let arr = [];
    for(let i=0; i<pagesTotal; i++){
        arr.push(i+1===page?1:0);
    }
    return (
        <div className={css.paginationContainer}>
            {arr.map((v, i)=>(<svg onClick={()=>setPage(i+1)}>{
                v===1 ? <use href={`${svg}#icon-radio-button-checked`}/> : <use href={`${svg}#icon-radio-button`}/>
            }</svg>))}
        </div>
    );
}

export default Pagination;