import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Quotations from "./Quotations";

const AppointmentForm = () => {
  let citasFromLocalStorage =
    JSON.parse(localStorage.getItem("citaslist")) || [];

  const [citas, setCitas] = useState(citasFromLocalStorage);
  const [objeto, setObjeto] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setObjeto((prevObjeto) => ({
      ...prevObjeto,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      objeto.mascota?.trim() &&
      objeto.dueño?.trim() &&
      objeto.fecha &&
      objeto.hora &&
      objeto.sintomas?.trim()
    ) {
      Swal.fire({
        title: "Seguro desea enviar el formulario?",
        showDenyButton: true,
        confirmButtonText: "Enviar",
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          setCitas((prevArray) => [...prevArray, objeto]);
          Swal.fire("datos Enviado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Envio cancelado", "", "info");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completar todos los campos",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    console.log(citas);
    setObjeto({});
  };

  const deleteCita = (citaId) => {
    let filterArray = citas.filter((id) => id !== citaId);
    setCitas(filterArray);
  };

  useEffect(() => {
    localStorage.setItem("citaslist", JSON.stringify(citas));
  }, [citas]);

  return (
    <div>
      <div className="text-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="mascota"
              type="text"
              placeholder="Nombre de mascota"
              maxLength={20}
              minLength={3}
              required
              value={objeto.mascota || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="dueño"
              type="text"
              placeholder="Nombre de dueño"
              maxLength={20}
              minLength={4}
              required
              value={objeto.dueño || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha: </Form.Label>
            <Form.Control
              name="fecha"
              type="date"
              placeholder="dd/mm/aaaa"
              required
              value={objeto.fecha || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Hora: </Form.Label>
            <Form.Control
              name="hora"
              type="time"
              placeholder="hh:mm"
              required
              value={objeto.hora || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="sintomas"
              type="text"
              placeholder="Describir sintomas"
              maxLength={50}
              minLength={12}
              required
              value={objeto.sintomas || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="secondary"
            className="bg-gradient mb-2"
          >
            Enviar
          </Button>
        </Form>
      </div>
      <section className="text-center">
        <hr />
        <h2>citas pendientes</h2>
        <hr />
      </section>
      <section className="container">
        <article className="row">
          <div className="d-flex flex-wrap">
            {citas.map((cita, index) => (
              <Quotations cita={cita} key={index} deleteCita={deleteCita} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default AppointmentForm;
