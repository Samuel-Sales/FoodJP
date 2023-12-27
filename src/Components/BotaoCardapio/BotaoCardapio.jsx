import { Link } from "react-router-dom";
import style from './BotaoCardapio.module.css';

export default function BotaoCardapio() {
    return (
        <Link className={style.botao} to='Cardapio'>Cardápio</Link>
    );
};