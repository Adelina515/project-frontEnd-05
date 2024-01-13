import css from "./remainder-component.module.css";
const RemainderComponent = ({children,path})=>{
    return (
        <p className={css.textRemainder}>{children}</p>
       )
}
export default RemainderComponent;