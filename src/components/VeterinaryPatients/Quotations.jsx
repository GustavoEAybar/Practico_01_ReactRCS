import { Button, Card } from "react-bootstrap";

const Quotations = ({ cita, deleteCita }) => {
  return (
    <div className="col-4  h-100">
      <Card className="text-center m-3">
        <Card.Header>
          <section className="d-flex">
            <div className="col-2 p-4 me-2 rounded-circle bg-info"></div>
            <article className="col-10 text-start">
              <p className="m-1">
                <strong>Mascota: {cita.mascota}</strong>
              </p>
              <p className="m-1">Dueño: {cita.dueño}</p>
            </article>
          </section>
        </Card.Header>
        <Card.Body className="bg-info bg-success p-2 bg-opacity-10">
          <div className="d-flex justify-content-around">
            <p className="m-1 w-25">Fecha </p>
            <div className="bg-white p-1 m-1 rounded w-75">{cita.fecha}</div>
          </div>
          <div className="d-flex justify-content-around">
            <p className="m-1 w-25">Hora </p>
            <div className="bg-white p-1 m-1 rounded w-75">{cita.hora}</div>
          </div>
          <div className="d-flex justify-content-around">
            <p className="m-1 w-25">Sintomas </p>
            <div className="bg-white p-1 m-1 rounded w-75">{cita.sintomas}</div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            className="btn btn-danger shadow"
            variant="primary"
            onClick={() => deleteCita(cita)}
          >
            Eliminar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Quotations;
