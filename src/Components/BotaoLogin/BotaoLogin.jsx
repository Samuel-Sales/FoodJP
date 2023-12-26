import { Link } from "react-router-dom";
import Login from "../../pages/Login/Login";
import style from './BotaoLogin.module.css';

export default function BotaoLogin() {
    return (
        <Link className={style.botao} to='login'>{<Login />}</Link>
    );
};