import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.log('Falha ao registrar o service worker:', error);
        });
    }

    const beforeInstallPromptHandler = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  const install = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('O usuário aceitou a instalação');
        } else {
          console.log('O usuário recusou a instalação');
        }

        setDeferredPrompt(null);
      });
    }
  };

  const userScreen = window.innerWidth;

  return (
    <>
      <Wrapper>
        <button onClick={install}>Baixar app</button>
        {userScreen < 800
          ? <Outlet />
          : <h1>Use seu celular</h1>
        }
      </Wrapper>

      <GlobalStyle />
    </>
  )
};

export default App;
