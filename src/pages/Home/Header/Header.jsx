import { Link } from "react-router-dom";
import Cardapio from "../../Cardapio/Cardapio";
import Sobre from "../../Sobre/Sobre";
import BotaoLogin from "../../../Components/BotaoLogin/BotaoLogin";
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <p className={style.titulo}>Food<span className={style.titulo__JP}>JP</span></p>
            <nav className={style.paginas}>
                <Link className={style.paginas__link} to='/'>Inicio</Link>
                <Link className={style.paginas__link} to='Cardapio'>{<Cardapio />}</Link>
                <Link className={style.paginas__link} to='Sobre'>{<Sobre />}</Link>
            </nav>
            <BotaoLogin />
        </header>
    );
};