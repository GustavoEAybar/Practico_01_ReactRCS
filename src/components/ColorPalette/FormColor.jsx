import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Palette from "./Palette";

const FormColor = () => {
  let colorFromLocalStorage =
    JSON.parse(localStorage.getItem("colorlist")) || [];

  const [color, setColor] = useState("");
  const [colors, setColors] = useState(colorFromLocalStorage);

  const handlesubmit = (e) => {
    e.preventDefault();
    setColors([...colors, color]);
    setColor("");
  };

  const deleteColor = (colorName) => {
    let filterArray = colors.filter((color) => color !== colorName);
    setColors(filterArray);
  };

  const colorDeFondo = {
    backgroundColor: `${color}`,
  }

  useEffect(() => {
    localStorage.setItem("colorlist", JSON.stringify(colors));
  }, [colors]);

  return (
    <>
      <section className="container">
        <article className="bg-info bg-success p-2 bg-opacity-10 row d-flex flex-row">
          <div className="p-5 m-3 col-2" style={colorDeFondo}></div>
          <div className="col">
            <Form onSubmit={handlesubmit}>
              <Form.Group className="my-3 text-end">
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Ingresar una tarea"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                />
                <Button
                  className="shadow rounded"
                  variant="primary"
                  type="submit"
                >
                  Guardar
                </Button>
              </Form.Group>
            </Form>
          </div>
        </article>
      </section>
      <section className="container">
        <article className="row">
          <div className="d-flex flex-wrap">
            {colors.map((color, index) => (
              <Palette
                color={color}
                key={index}
                deleteColor={deleteColor}
              ></Palette>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default FormColor;
