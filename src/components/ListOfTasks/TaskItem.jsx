import { ListGroup } from "react-bootstrap";

const TaskItem = ({ pending, deleteTask }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            {pending} <button className="btn btn-danger rounded-circle"onClick={()=>deleteTask(pending)}>X</button>
        </ListGroup.Item>
    );
};

export default TaskItem;