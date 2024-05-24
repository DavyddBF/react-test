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
