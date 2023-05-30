import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';

function App() {
  return (
    <>
      <Wrapper>
        <Outlet/>
      </Wrapper>
      <GlobalStyle/>
    </>
  )
};

export default App;
