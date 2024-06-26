import { Component, ReactNode } from "react";
import FilmeType from "../../filme";
import api from "../../services/api";
import { useParams } from "react-router-dom";

interface ComponenteState {
    filme: FilmeType[],
    loading: boolean
}

class Filmes extends Component<{}, ComponenteState> {
    public id;

    constructor(props: any) {
        super(props);
        this.state = {
            filme: [],
            loading: true
        };

        this.id = useParams();
    }

    public async componentDidMount(): Promise<void> {
        await api.get(`movie/${ this.id }`, {
            params: {
                api_key: '184ee90db92bf2330058b37260977a7f',
                language: 'pt-BR'
            }
        }).then( resposta => {
            this.setState({
                filme: resposta.data,
                loading: false
            })
        }).catch( () => {
            console.log("Erro");
        });
    }

    public render(): ReactNode {
        return (
            <div></div>
        );
    }
}

export default Filmes;