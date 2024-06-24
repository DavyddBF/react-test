import { Component, ReactNode } from "react";
import RouterApp from "./router";

class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    public render(): ReactNode {
        return (
            <RouterApp />
        );
    }
}

export default App;