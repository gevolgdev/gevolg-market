import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./lib/redux/reducer";
import { download } from "./lib/redux/slices/downloadedSlice";
import Download from "./components/Download";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const downloaded: boolean = useSelector((state: RootState) => state.downloadedSlice.downloaded);
  const Dispatch = useDispatch();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('../public/serviceWorker.js') .then(registration => {
            console.log('Service worker registrado com sucesso:', registration);
          }) .catch(error => {
            console.log('Falha ao registrar o service worker:', error);
          }
        );
      })
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

  const prompt = () => {
    console.log(deferredPrompt);
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') Dispatch(download(false));
        else Dispatch(download(false));

        setDeferredPrompt(null);
      });
    } else {
      return;
    }
  };

  return (
    <>
      <Wrapper>
        {downloaded
        ? <Download>
          <button className='download' onClick={ prompt }>Baixar aplicativo</button>
          <button className='navigator' onClick={ () => Dispatch(download(false)) }>Usar no navegador</button>
        </Download>
        : <Outlet/>}
      </Wrapper>

      <GlobalStyle />
    </>
  )
};

export default App;
