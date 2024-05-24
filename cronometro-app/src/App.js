import { useState } from 'react';

import './App.css';
import cronometroImg from './assets/cronometro.png';

function Btn(props) {
  return (
    <>
      <a className='btn' onClick={ props.click } >{ props.title }</a>
    </>
  );
}

function App() {

  const [tempo, setTempo] = useState(0);
  const [btnTitle, setBtnTitle] = useState([ 'Vai', 'Limpar' ]);
  let temp = 0;
  let timer = null;

  const iniciar = () => {

    if(timer !== null) {

      clearInterval(timer);
      timer = null;

      setBtnTitle([ 'Vai', 'Limpar' ]);
    } else {

      timer = setInterval(() => {
        setTempo( temp += 0.1 );
      }, 100);

      setBtnTitle([ 'Pausar', 'Limpar' ]);
    }
  }

  const limpar = () => {

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

