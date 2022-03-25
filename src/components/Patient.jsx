const Patient = ({ patient, setPatient, deletePatient }) => {
  const { id, date, email, nameOwner, namePet, symptoms } = patient;

  const handleDelete = () => {
    const resp = confirm("¿Deseas eliminar este paciente?");

    if (resp) deletePatient(id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{namePet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{nameOwner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setPatient(patient)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
