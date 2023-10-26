import FormTask from "./FormTask";


const ListOfTasks = () => {
  return (
    <div className="mb-2">
      <hr />
      <h2>List of tasks:</h2>
      <hr />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded border border-info m-5">
        <h3 className="text-center fs-3">Bienvenido</h3>
        <FormTask></FormTask>
      </div>
    </div>
  );
};

export default ListOfTasks;
