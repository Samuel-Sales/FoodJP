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

            <section className={style.container__MaisPopulares}>
                <p className={style.container__MaisPopulares__titulo}>Mais populares</p>
                <div className={style.container__MaisPopulares__cards}>
                    <div className={style.container__MaisPopulares__card}>
                        <div className={style.container__MaisPopulares__card__img}>
                            <img src="/Imagens/Prato1.svg" alt="Prato 1" />
                        </div>
                        <p className={style.container__MaisPopulares__card__titulo}>Ramen de Frango</p>
                        <p className={style.container__MaisPopulares__card__texto}>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__MaisPopulares__card__preco}>R$ 30</p>
                    </div>

                    <div className={style.container__MaisPopulares__card}>
                        <div className={style.container__MaisPopulares__card__img}>
                            <img src="/Imagens/Prato2.svg" alt="Prato 2" />
                        </div>
                        <p className={style.container__MaisPopulares__card__titulo}>Ramen de Frango</p>
                        <p className={style.container__MaisPopulares__card__texto}>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__MaisPopulares__card__preco}>R$ 30</p>
                    </div>

                    <div className={style.container__MaisPopulares__card}>
                        <div className={style.container__MaisPopulares__card__img}>
                            <img src="/Imagens/Prato3.svg" alt="Prato 3" />
                        </div>
                        <p className={style.container__MaisPopulares__card__titulo}>Ramen de Frango</p>
                        <p className={style.container__MaisPopulares__card__texto}>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__MaisPopulares__card__preco}>R$ 30</p>
                    </div>
                </div>

            </section>

            <section className={style.container__Comentarios}>
                <p className={style.container__Comentarios__titulo}>Comentários</p>
                <div className={style.container__Comentarios__cards}>
                    <div className={style.container__Comentarios__card}>
                        <img src="/Imagens/Profile1.svg" alt="Imagem da mulher" />
                        <p className={style.container__Comentarios__Nome}>Daniele Almeida</p>
                        <p className={style.container__Comentarios__texto}>
                            Ótimo serviço! Encantada com a <br />
                            qualidade dos pratos.
                        </p>
                        <img src="/Imagens/estrelas.svg" alt="Nota" />
                    </div>

                    <div className={style.container__Comentarios__card}>
                        <img src="/Imagens/Profile2.svg" alt="Imagem do homem" />
                        <p className={style.container__Comentarios__Nome}>Ricardo França</p>
                        <p className={style.container__Comentarios__texto}>
                            Não é apenas a comida excelente, o <br />
                            serviço torna a experiência especial.
                        </p>
                        <img src="/Imagens/estrelas.svg" alt="Nota" />
                    </div>
                </div>

            </section>
        </main>
    );
};