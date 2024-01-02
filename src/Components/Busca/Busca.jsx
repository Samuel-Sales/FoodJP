import style from './Busca.module.css';
import ViaCep from '../../api/ApiViaCep/ViaCep';

export default function Busca() {
    return (
        <section className={style.container}>
            <p className={style.titulo}>Localização</p>

            <ViaCep />
        </section>
    );
};