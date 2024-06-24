import { AxiosResponse } from "axios";
import { Component, ReactNode } from "react";

import api from "../../services/api";
import FilmeType from "../../filme";

import './home.css';
import { Link } from "react-router-dom";

interface ComponenteState {
    filmes: FilmeType[],
    loading: boolean
}

class Home extends Component<{}, ComponenteState> {
    constructor(props: any) {
        super(props);
        this.state = {
            filmes: [],
            loading: true
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount(): Promise<void> {
        const resposta: AxiosResponse<any, any> = await api.get("movie/now_playing", {
            params: {
                api_key: '184ee90db92bf2330058b37260977a7f',
                language: 'pt-BR',
                page: 1
            }
        });

        const resultados: FilmeType[] = resposta.data.results;
        this.setState({
            filmes: resultados,
            loading: false
        });
    }

    public render(): ReactNode {
        if (this.state.loading) {
            return (
                <div>
                    <h1>Carregando...</h1>
                </div>
            );
        };

        return (
            <div className="container">
                <div className="filmes__lista">
                    {
                        this.state.filmes.map((filme: FilmeType) => {
                            return (
                                <article key={ filme.id }>
                                    <div>
                                        <strong className="filmes__titulo">{ filme.title }</strong>
                                    </div>
                                    <div>
                                        <img className="filmes__img" src={`https://image.tmdb.org/t/p/original/${ filme.poster_path }`} alt={ filme.title } />
                                    </div>
                                    <div>
                                        <Link className="filmes__acessar" to={`/filme/${ filme.id }`}>Acessar</Link>
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;