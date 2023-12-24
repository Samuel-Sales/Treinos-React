import { useState } from "react";

export default function EstadoBooleano() {
    const [estado, setEstado] = useState(false);

    function Alternar() {
        setEstado(!estado)
    }

    return (
        <>
            <button onClick={Alternar}>Alternar Estado</button>
            <p>{estado ? <p>Esta visivel</p> : <p>Esta oculto</p>}</p>
        </>
    );
};