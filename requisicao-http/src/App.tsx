import { Component, useEffect, useState } from 'react';

import { NutriCard } from './nutriCard';
import './App.css';


// [ Código em forma de classe]

interface  AppState {
  nutri: NutriCard[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nutri: [],
    };
  }

  render() {
    return (
      <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {
        this.state.nutri.map((item: NutriCard) => {
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
    );
  }
}

// [ Código em forma de função ]

// function App() {

//   const [nutri, setNutri] = useState<NutriCard[]>([]);

//   useEffect( () => {
//     const carregaApi = async (): Promise<void> => {
//       const api: string = 'https://sujeitoprogramador.com/rn-api/?api=posts';

//       const dados: Response = await fetch(api);
//       const dadosConvertidos: NutriCard[] = await dados.json();

//       setNutri(dadosConvertidos);
//     }
//     carregaApi();
//   }, []);

//   return (
//     <div>
//       <header>
//         <strong>React Nutri</strong>
//       </header>

//       {
//         nutri.map((item: NutriCard) => {
//           return (
//             <article className='post' key={ item.id }>
//               <strong className='titulo'>{ item.titulo }</strong>
//               <img className='capa' src={ item.capa } alt={ item.titulo } />
//               <p className='subtitulo'>{ item.subtitulo }</p>
//               <a className='btn'>Acessar</a>
//             </article>
//           );
//         })
//       }
//     </div>
//   )
// }


// EXPORT
export default App;
