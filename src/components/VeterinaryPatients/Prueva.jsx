import { useState } from "react";

const Prueva = () => {
    const [arrayObjetos, setArrayObjetos] = useState([]);
    const [objeto, setObjeto] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObjeto((prevObjeto) => ({
            ...prevObjeto,
            [name]: value,
        }));
        console.log(objeto);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setArrayObjetos((prevArray) => [...prevArray, objeto]);
        console.log(arrayObjetos);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name='nombre' value={objeto.nombre || ''} onChange={handleChange}/>
            <input type="text" name='edad' value={objeto.edad || ''} onChange={handleChange}/>
            <button type="submit" className='bg-gradient mb-2'>enviar</button>
            </form>
            <ul>
                {arrayObjetos.map((objeto, index) => (
                    <li key={index}>{objeto.nombre} - {objeto.edad}</li>
                ))}
            </ul>
        </div>
    );
};

export default Prueva;