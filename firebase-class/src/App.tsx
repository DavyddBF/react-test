import {
  doc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from './firebase/firebase';
import { Component } from 'react';
import './App.css';

interface Users {
  id: string,
  user: string,
  idade: string
}

interface AppState {
  user: string,
  idade: string,
  email: string,
  senha: string,
  users: Users[]
}

class App extends Component<{}, AppState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      user: '',
      idade: '',
      email: '',
      senha: '',
      users: []
    }
  }

  public async novoUsuario(): Promise<void> {

  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Firebase + React</h1>

        <div className='container'>
            <h2>Cadastro Email e Senha</h2>
            <label>Email:</label>
            <input 
                type="email" 
                placeholder='Insira seu email'
                value={ this.state.email }
                onChange={ (evento) => this.setState({ email: evento.target.value}) }
            />

            <label>Senha:</label>
            <input 
                type="password" 
                placeholder='Insira sua senha'
                value={ this.state.senha }
                onChange={ (evento) => this.setState({ senha: evento.target.value}) }
            />
            <br/>
            <button onClick={ this.novoUsuario }>Cadastrar</button>
        </div>
      </div>
    );
  }
}

export default App;