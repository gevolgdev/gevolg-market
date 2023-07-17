import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.log('Falha ao registrar o service worker:', error);
        });
    });
  };

  let deferredPrompt: any;

  function install() {
    // Chamar o prompt de instalação quando o botão é clicado
    deferredPrompt.prompt();

    // Aguardar a resposta do usuário
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('O usuário aceitou a instalação');
      } else {
        console.log('O usuário recusou a instalação');
      }
      // Limpar a referência ao prompt
      deferredPrompt = null;
    });
  }

  const userScreen = window.innerWidth;

  return (
    <>
      <Wrapper>
        <button onClick={install}>Baixar app</button>
        {userScreen < 800  
          ? <Outlet/> 
          : <h1>Use seu celular</h1>
        }
      </Wrapper>
      
      <GlobalStyle/>
    </>
  )
};

export default App;
