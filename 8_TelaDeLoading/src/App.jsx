import { useState } from 'react';
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  function handleButtonClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCompletion(true);
    }, 5000);
  };

  return (
    <div>
      <header>
        <h1>Tela de Loading</h1>
        <button onClick={handleButtonClick} disabled={loading || showCompletion}>
          {loading ? 'Carregando....' : 'Iniciar Carregamento'}
        </button>

        {showCompletion && (
          <div>
            <h2>Carregamento Concluido!</h2>
            <p>Aqui esta a tela de conclusao</p>
          </div>
        )}

        {loading && (
          <div>
            <h2>Carregando....</h2>
            <p>Por favor, aguarde</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App
