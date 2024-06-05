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
    const carregaApi= async (): Promise<void> => {
      const api: string = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      const dados: Response = await fetch(api);
      const dadosConvertidos: NutriCard[] = await dados.json();

      setNutri(dadosConvertidos);
    }
    carregaApi();
  }, []);

  return (
    <div>

    </div>
  )
}

export default App;
