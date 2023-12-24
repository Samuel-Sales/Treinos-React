export default function Pai() {

    // Componente Filho
    const CaixaColorida = ({ cor }) => {
        const estiloCaixa = {
            width: '100px',
            height: '100px',
            backgroundColor: cor,
            margin: '10px'
        };
        return <div style={estiloCaixa}></div>
    };

    // Componente pai
    const ComponetePai = () => {
        const corFilho1 = 'white';
        const corFilho2 = 'green';

        return (
            <div>
                <CaixaColorida cor={corFilho1} />
                <CaixaColorida cor={corFilho2} />
            </div>
        );
    };

    return (
        <div>
            <h1>Exemplo: Componentes Filhos</h1>
            <ComponetePai />
        </div>
    );
};