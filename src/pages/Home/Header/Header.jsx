import { Link } from "react-router-dom";
import Cardapio from "../../Cardapio/Cardapio";
import Sobre from "../../Sobre/Sobre";
import BotaoLogin from "../../../Components/BotaoLogin/BotaoLogin";
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <p className={style.titulo}>Food<span className={style.titulo__JP}>JP</span></p>
            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='Cardapio'>{<Cardapio />}</Link>
                <Link to='Sobre'>{<Sobre />}</Link>
            </nav>
            <BotaoLogin />
        </header>
    );
};