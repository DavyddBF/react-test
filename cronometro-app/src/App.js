import { useState, useRef } from 'react';

import './App.css';
import cronometroImg from './assets/cronometro.png';
import Btn from './btn/Btn';

function App() {

  const [tempo, setTempo] = useState(0);
  const [btnTitle, setBtnTitle] = useState([ 'Vai', 'Limpar' ]);
  const timer = useRef(null);

  const iniciar = () => {

    if(timer.current !== null) {

      clearInterval(timer.current);
      timer.current = null;

      setBtnTitle([ 'Vai', 'Limpar' ]);
    } else {

      timer.current = setInterval(() => {
        setTempo( tempo => tempo + 0.1 );
      }, 100);

      setBtnTitle([ 'Pausar', 'Limpar' ]);
    }
  }

  const limpar = () => {
    if(timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }

    setTempo(0);
    setBtnTitle([ 'Vai', 'Limpar' ]);
  }

  return (
    <div className='container'>
        <img className='img' src={ cronometroImg } />
        <a className='timer' >{ tempo.toFixed(1) }</a>
        <div className='area-btn'>
          <Btn click={ iniciar } title={ btnTitle[0] } />
          <Btn click={ limpar } title={ btnTitle[1] } />
        </div>
    </div>
  );
}

export default App;

