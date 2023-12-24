import { useState } from "react"

export default function Contador () {
    const [contador, setContador] = useState(0);

    function AdicionarClique() {
        setContador(contador + 1);
    }

    function RemoverClique() {
        if (contador <= 0) {
            
        }else {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <button onClick={AdicionarClique}>Adicionar</button>
            <button onClick={RemoverClique}>Remover</button>
            <p>{contador}</p>

        </>
    )
}