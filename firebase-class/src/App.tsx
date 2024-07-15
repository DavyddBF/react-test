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
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
    await createUserWithEmailAndPassword(auth, this.state.email, this.state.senha)
    .then(() => {
        console.log('Cadastrado com sucesso!!!');
        this.setState({ email: ''});
        this.setState({ senha: ''});
    })
    .catch((erro) => {
        if(erro.code == 'auth/weak-password'){
            alert('Senha muito fraca!!');
        } else if (erro.code == 'auth/email-already-in-use') {
            alert('Email já existe!!');
        }
    });
  }

  public async cadastrarUser(): Promise<void> {
    await addDoc(collection(db, 'user'), {
      user: this.state.user,
      idade: this.state.idade
    })
    .then(() => {
      
    })
    .catch(() => {

    });
  }

  public async buscarTodosUsers(): Promise<void> {

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
                onChange={ (evento) => this.setState({ email: evento.target.value }) }
            />

            <label>Senha:</label>
            <input 
                type="password" 
                placeholder='Insira sua senha'
                value={ this.state.senha }
                onChange={ (evento) => this.setState({ senha: evento.target.value }) }
            />
            <br/>
            <button onClick={ this.novoUsuario }>Cadastrar</button>
        </div>
        <div className='container'>
                <h2>Cadastro User e Idade</h2>
                <label>User:</label>
                <input 
                    type='text' 
                    placeholder='Digite o seu nome/user'
                    value={ this.state.user }
                    onChange={ (evento) => this.setState({ user: evento.target.value }) }
                />

                <label>Idade:</label>
                <input 
                    type="text" 
                    placeholder='Digite sua idade'
                    value={ this.state.idade }
                    onChange={ (evento) => this.setState({ idade: evento.target.value }) }
                /> <br/>

                <button className='btn' onClick={ this.cadastrarUser }>Cadastrar</button>
                <button className='btn' onClick={ this.buscarTodosUsers }>Buscar usuários</button> <br/>

            </div>
            <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;