import Card from "./Card.jsx";

const ListOfEmployees = () => {
  const empleados = [
      {
        id: 1,
        fullName: "Laya Dueñas",
        title: "CEO",
        department: "Business",
        pic: "https://robohash.org/utassumendaaut.png?size=50x50&set=set1",
      },
      {
        id: 2,
        fullName: "Astryd Vallés",
        title: "CMO",
        department: "Marketing",
        pic: "https://robohash.org/sedvoluptatibusquasi.png?size=50x50&set=set1",
      },
      {
        id: 3,
        fullName: "Shantell Meza",
        title: "CFO",
        department: "Business",
        pic: "https://robohash.org/quicupiditateipsa.png?size=50x50&set=set1",
      },
      {
        id: 4,
        fullName: "Sergio Ocampo",
        title: "CTO",
        department: "Engineering",
        pic: "https://robohash.org/iuremodiqui.png?size=50x50&set=set1",
      },
      {
        id: 5,
        fullName: "Ares Jiménez",
        title: "Art Director",
        department: "Marketing",
        pic: "https://robohash.org/cumvelitea.png?size=50x50&set=set1",
  },
      {
        id: 6,
        fullName: "Marta Pérez",
        title: "Frontend Dev",
        department: "Engineering",
        pic: "https://robohash.org/voluptasnemoaut.png?size=50x50&set=set1",
      },
      {
        id: 7,
        fullName: "Ellen Balderas",
        title: "Digital Strategist",
        department: "Marketing",
        pic: "https://robohash.org/autconsequaturmaiores.png?size=50x50&set=set1",
      },
      {
        id: 8,
        fullName: "Cynthia Valentín",
        title: "Backend Dev",
        department: "Engineering",
        pic: "https://robohash.org/quiinciduntmodi.png?size=50x50&set=set1",
      },
      {
        id: 9,
        fullName: "Bernard Jung",
        title: "DevOps Engineer",
        department: "Engineering",
        pic: "https://robohash.org/necessitatibusharumadipisci.png?size=50x50&set=set1",
      },
    ];

  return (
    <div className="mb-2">
      <hr />
      <h2>List of employees:</h2>
      <hr />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded border border-info m-5 text-center">
        <h3 className="text-center fs-3">RCS</h3>
        <hr />
        <section className="container">
          <article className="row">
            <div className="">
              {empleados.map((empleado) => (
                  <Card empleado={empleado} key={empleado.id}></Card>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ListOfEmployees;
