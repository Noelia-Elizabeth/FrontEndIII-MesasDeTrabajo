const root = document.getElementById("root");

const listas = (
    <div>
        <h1>En <i>React</i></h1>
        <hr/>
        <h1>Lista de Productos en stock:</h1>
        <ul>
            <li>Manzana</li>
            <li>Pera</li>
            <li>Naranja</li>
            <li>Banana</li>
            <li>Kiwi</li>
        </ul>
        <h2>Productos en falta:</h2>
        <ul>
            <li>Durazno</li>
            <li>Cereza</li>
            <li>Anana</li>
        </ul>
    </div>
);

ReactDOM.render(listas, root);
