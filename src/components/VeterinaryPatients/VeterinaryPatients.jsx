import AppointmentForm from "./AppointmentForm";

const VeterinaryPatients = () => {



  return (
    <div className="mb-2">
      <hr />
      <h2>Veterinary Patients: </h2>
      <hr />
      <section className="container">
        <article className="row">
          <div className="col-12 border border-5">
            <h3 className="bg-light bg-gradient text-center w-100 h-auto p-2 mt-2">
              Registro de citas
            </h3>
            <hr />
            <AppointmentForm />
          </div>
        </article>
      </section>
    </div>
  );
};

export default VeterinaryPatients;
