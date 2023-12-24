import { Link } from "react-router-dom";
import style from './Home.module.css';

export default function Home() {
    return (
        <>
            <h1>Boas-Vindas</h1>
            <Link className={style.botao} to='Despedida'>Va para segunda pagina</Link>
        </>
    );
};