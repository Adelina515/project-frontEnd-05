import css from './DayProducts.module.css';
import ProductsTable from './productsTable/ProductsTable';
//import EmptyList from '';


const DayProducts = () => {
      const diaryProducts = [
    {
      _id: '1',
      title: 'Product 1',
      category: 'Category 1',
      calories: 100,
      amount: 200,
      recommended: true,
    },]
    return (
        <div className = {css.dayProducts}>
            <div className = {css.dayScroll}>
                <div className={ css.diaryMen}> 
                    <h3 className = {css.DiaryZag}>Products</h3>
                    <button>Add products</button>
                </div>
            
               <ProductsTable products={diaryProducts}/>
            </div>

        </div> 
)
}

export default DayProducts;

