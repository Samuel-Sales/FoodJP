import style from './Busca.module.css';

export default function Busca() {
    function Buscar() {
        console.log('Estou clicando no botao');
    }

    return (
        <section className={style.container}>
            <p className={style.titulo}>Localização</p>

            <p>Logradouro</p>
            <p>Complemento</p>
            <p>Bairro</p>
            <p>Localidade</p>
            <p>UF</p>

            <div className={style.container__funcionalidade}>
                <input type="text" placeholder='Localização para entrega' />
                <button onClick={Buscar}>Buscar</button>
            </div>

        </section>
    );
};