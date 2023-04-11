import { useState } from 'react';
import { AppContainer } from './style';

interface Infos {
  name: string;
  age: number;
}

function App() {
  const [infos, setInfos] = useState<Infos | null>(null);

  const name: string = 'Davi'

  const Name = completeName('Ricardo', 23)

  function completeName(name: string, age: number) {
    return <h1>Meu nome é {name} e tenho {age} anos</h1>
  }

  return (
    <AppContainer>
      <h1>React.js + Typescript + Redux</h1>
      {Name}
    </AppContainer>
  )
}

export default App;
