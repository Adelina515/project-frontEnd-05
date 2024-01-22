import css from './UserBar.module.css'
import sprite from '../../img/sprite/symbol-defs.svg';
import { BtnSettings } from "btn/btnSettings/BtnSettings"

export const UserBar = ()=>{
    return <div className={css.userBar}>
        <BtnSettings />
            <div className={css.avatar}>
                <svg className={css.avatarSvg}>
                    <use href={`${sprite}#icon-user`}></use>
                </svg>
            </div>
    </div>
}