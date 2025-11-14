import "./lista-suspensa.estilos.css";

export function ListaSuspensa(props) {
    return (
        <select {...props} className="lista-suspensa-form">
            <option value=""></option>
        </select>
    );
}
