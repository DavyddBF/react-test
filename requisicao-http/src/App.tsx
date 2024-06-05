import { useState } from 'react';
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

  return (
    <div>

    </div>
  )
}

export default App;
