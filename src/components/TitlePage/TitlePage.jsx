import css from "./title-page.module.css";
 const TitlePage=({children})=>{
return(
    <h2 className={css.titlePage}>{children}</h2>
)
}
export default TitlePage;