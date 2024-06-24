import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
    public render(): ReactNode {
        return (
            <div>
                <div>
                    <h1>404</h1>
                    <h2>A página "{ document.location.pathname }" não foi encontrada!!</h2>

                    <h3><Link to="/">Voltar para a Home</Link></h3>
                </div>
            </div>
        );    
    }
}

export default Error;