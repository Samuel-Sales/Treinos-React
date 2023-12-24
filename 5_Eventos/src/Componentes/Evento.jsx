import { useState } from "react";

export default function Evento() {
    const [conteudo, setConteudo] = useState(" ");

    function entrada(event) {
        setConteudo(event.target.value)
    }

    return (
        <>
            <input onChange={entrada} type="text" />
            <p>{conteudo}</p>
        </>
    );
};