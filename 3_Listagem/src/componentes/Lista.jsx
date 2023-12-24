export default function Lista() {
    const motos = ['Factor 125', 'Z1000', 'MT-07', 'Kawazaki Ninja'];

    return (
        <>
            <div>
                <h2>Lista de Motos</h2>
                <ul>
                    {motos.map((motos, index) => (
                        <li key={index}>{motos}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};