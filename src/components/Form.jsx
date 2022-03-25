import { useState, useEffect } from "react";

import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [form, setForm] = useState({
    namePet: "",
    nameOwner: "",
    email: "",
    date: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length) {
      setForm({ ...patient });
    }
  }, [patient]);

  const { namePet, nameOwner, email, date, symptoms } = form;

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([namePet, nameOwner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objectPatient = {
      namePet,
      nameOwner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      objectPatient.id = patient.id;

      const updatePatient = patients.map((p) =>
        p.id === patient.id ? objectPatient : p
      );

      setPatients(updatePatient);
      setPatient({});
    } else {
      //New record
      objectPatient.id = generarId();

      setPatients((patients) => [...patients, objectPatient]);
    }

    setForm({ namePet: "", nameOwner: "", email: "", date: "", symptoms: "" });
  };

  return (
    <div className="m-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            name="namePet"
            value={namePet}
            autoComplete="off"
            onChange={handleInputChange}
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            name="nameOwner"
            value={nameOwner}
            autoComplete="off"
            onChange={handleInputChange}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="emaiñ"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleInputChange}
            id="emaiñ"
            type="email"
            placeholder="example@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            name="date"
            value={date}
            autoComplete="off"
            onChange={handleInputChange}
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name="symptoms"
            value={symptoms}
            autoComplete="off"
            onChange={handleInputChange}
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-400"
            placeholder="Describe los sintomas"
          />
        </div>

        <input
          type="submit"
          value={patient.id ? "Editar paciente" : "Agregar paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
