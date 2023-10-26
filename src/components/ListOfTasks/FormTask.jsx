import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import List from './List';
import { useEffect, useState } from 'react';

const FormTask = () => {
  let taskFromLocalStorage = JSON.parse(localStorage.getItem('tasksList'))||[];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(taskFromLocalStorage);

  const handlesubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
  },[tasks]);

  const deleteTask= (taskName) => {
    let filterArray = tasks.filter(task => task !== taskName);
    setTasks(filterArray);
  };

  return (
    <div>
      <Form onSubmit={handlesubmit} className='text-center'>
        <Form.Group className="mb-3 fs-3" controlId="formBasicEmail">
          <Form.Label>Ingrese una tarea:</Form.Label>
          <Form.Control type="text" placeholder="Tarea" onChange={(e)=>setTask(e.target.value)}
          value={task}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Button className='d-none' variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
      <section className='container'>
        <List tasksArray={tasks} deleteTask={deleteTask}></List>
      </section>
    </div>
  );
};

export default FormTask;
