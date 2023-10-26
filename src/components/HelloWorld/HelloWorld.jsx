import { useState } from "react";

const HelloWorld = ({ nuevoSaludo }) => {
    const [modificacion, setModificacion] = useState("")
    return (
        <div className="mb-2">
            <h2>HelloWorld:</h2>
            <hr />
            <p className="text-center fs-3">Hola {nuevoSaludo}{modificacion}!</p>
            <div className="text-center">
                <button className="btn btn-primary" onClick={()=>setModificacion(" (Desde setChange)")}>Clickea aqui!</button>
            </div>
        </div>
    );
};

export default HelloWorld;