import { Button, Card } from "react-bootstrap";

const Palette = ({ color, deleteColor }) => {
  const colorDeFondo = {
    backgroundColor: `${color}`,
  }
  return (
    <div className="col-4">
      <Card className="text-center m-3">
        <Card.Header>{color}</Card.Header>
        <Card.Body className="bg-info bg-success p-2 bg-opacity-10">
          <div className="p-5" style={colorDeFondo}></div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            className="btn btn-danger shadow"
            variant="primary"
            onClick={() => deleteColor(color)}
          >
            Eliminar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Palette;
