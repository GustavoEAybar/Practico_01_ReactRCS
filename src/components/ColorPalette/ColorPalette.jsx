import FormColor from './FormColor';

const ColorPalete = () => {
  return (
    <div className="mb-2">
      <hr />
      <h2>Color palette:</h2>
      <hr />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded border border-info m-5">
        <h3 className="text-center fs-3">Administrar colores</h3>
        <FormColor></FormColor>
      </div>
    </div>
  );
};

export default ColorPalete;
