import FormData from "./FormData";

const SimpleForm = () => {
  return (
    <div className="mb-2">
      <hr />
      <h2>Simple Form: </h2>
      <hr />
      <section className="container">
        <article className="row">
          <div className="col-12 border border-5">
            <h3 className="bg-secondary bg-gradient text-center text-white w-100 h-auto p-2 mt-2">
              Formulario
            </h3>
            <hr />
            <FormData />
          </div>
        </article>
      </section>
    </div>
  );
};

export default SimpleForm;
