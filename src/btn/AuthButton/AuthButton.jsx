import css from  "./auth-button.module.css";

const AuthButton = ({children})=>{
    return(
        <>
        <button className={css.btn} type="submit">{children}</button>
        </>
    )
}
export default AuthButton;