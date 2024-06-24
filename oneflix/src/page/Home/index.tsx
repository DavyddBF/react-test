import { AxiosResponse } from "axios";
import { Component, ReactNode } from "react";
import api from "../../services/api";
import FilmeType from "../../filme";

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
        return (
            <div>

            </div>
        );
    }
}

export default Home;