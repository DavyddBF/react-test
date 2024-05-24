import { useState } from 'react';

import './App.css';
import cronometroImg from './assets/cronometro.png';

function Btn(props) {
  return (
    <>
      <a>{ props.title }</a>
    </>
  );
}

function App() {

  const [tempo, setTempo] = useState('0.0')
  const [btnTitle, setBtnTitle] = useState([ 'Vai', 'Limpar' ])
  let timer = null;

  const iniciar = () => {

    if(timer !== null) {

      clearInterval(timer);
      timer = null;

      setBtnTitle([ 'Vai', 'Limpar' ]);
    } else {

      timer = setInterval(() => {
        setTempo( tempo += 0.1 );
      }, 100);

      setBtnTitle([ 'Pausar', 'Limpar' ]);
    }
  }

  const limpar = () => {

  }

  return (
    <div>
        <img className='img' src={ cronometroImg } />
        <a className='timer' >{ tempo }</a>
        <div>
          <Btn title={btnTitle[0]} />
          <Btn title={btnTitle[1]} />
        </div>
    </div>
  );
}

export default App;
