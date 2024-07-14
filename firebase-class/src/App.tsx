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

  public render(): JSX.Element {
    return (
      <div></div>
    );
  }
}

export default App;