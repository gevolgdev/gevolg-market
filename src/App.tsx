import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';

function App() {

  const userScreen = window.innerWidth;

  return (
    <>
      <Wrapper>
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
