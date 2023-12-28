import style from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={style.container}>
            <p className={style.titulo}>Food<span className={style.jp}>JP</span></p>
            <div className={style.contato}>
                <p className={style.contato__titulo}>Contato</p>
                <p className={style.contato__telefone}>+55 21 9999-9999</p>
                <p className={style.contato__email}>email@gmail.com</p>
            </div>

            <div className={style.sobreNos}>
                <p className={style.sobreNos__titulo}>Sobre nós</p>
                <p className={style.sobreNos__menu}>Menu</p>
                <p className={style.sobreNos__valores}>Valores</p>
                <p className={style.sobreNos__pagina}>Página principal</p>
            </div>

            <div className={style.servicos}>
                <p className={style.servicos__titulo}>Serviços</p>
                <p className={style.servicos__entrega}>Entrega</p>
                <p className={style.servicos__retirada}>Retirada</p>
            </div>
        </footer>
    );
};