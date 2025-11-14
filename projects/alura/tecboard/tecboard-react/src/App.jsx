import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

function App() {
    return (
        <main>
            <header>
                <img src="/logo.png" alt="Logo da Tecboard" />
            </header>
            <section>
                <img src="/banner.png" alt="Banner de tecnologia" />
            </section>
            <FormularioDeEvento />
        </main>
    );
}

export default App;
