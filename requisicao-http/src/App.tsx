import { useEffect, useState } from 'react';
import './App.css';

function App() {
  interface NutriCard {
    id: number;
    titulo: string;
    capa: string;
    subtitulo: string;
    categoria: string;
  }

  const [nutri, setNutri] = useState<NutriCard[]>([]);

  useEffect( () => {
    const carregaApi = async (): Promise<void> => {
      const api: string = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      const dados: Response = await fetch(api);
      const dadosConvertidos: NutriCard[] = await dados.json();

      setNutri(dadosConvertidos);
    }
    carregaApi();
  }, []);

  return (
    <div>
      <header>
        <strong>React Nutri</strong>
      </header>

      {
        nutri.map((item: NutriCard) => {
          return (
            <article className='post' key={ item.id }>
              <strong className='titulo'>{ item.titulo }</strong>
              <img className='capa' src={ item.capa } alt={ item.titulo } />
              <p className='subtitulo'>{ item.subtitulo }</p>
              <a className='btn'>Acessar</a>
            </article>
          );
        })
      }
    </div>
  )
}

export default App;
