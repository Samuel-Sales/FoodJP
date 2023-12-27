import { Link } from 'react-router-dom';
import BotaoCardapio from '../../../Components/BotaoCardapio/BotaoCardapio';
import style from './Main.module.css';

export default function Main() {
    return (
        <main className={style.container}>
            <section className={style.container__ComidaOriental}>
                <div>
                    <p className={style.container__ComidaOriental__titulo}>Comida Oriental</p>
                    <p className={style.container__ComidaOriental__texto}>
                        A culinária Japonesa é bastante equilibrada, <br />
                        sendo muito rica em peixes (ômega 3), <br />
                        vegetais, massas e ingredientes frescos.
                    </p>
                    <BotaoCardapio />
                </div>
                <img src='/Imagens/Sushi.svg' alt="Imagem de um sushi" />
            </section>

            <section className={style.container__FeitaDeFormaTradicional}>
                <img src="/Imagens/SegurandoPrato.svg" alt="Segurando prato" />
                <div>
                    <p className={style.container__FeitaDeFormaTradicional__titulo}>Feita de forma <br /> Tradicional</p>
                    <p className={style.container__FeitaDeFormaTradicional__texto}>
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link className={style.container__FeitaDeFormaTradicional__link} to=''>Ler mais sobre o modo de preparo</Link>
                </div>
            </section>
        </main>
    );
};