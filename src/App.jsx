import { useState, useEffect } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = JSON.parse(localStorage.getItem("patients")) ?? [];

    setPatients(getLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter((p) => p.id !== id);

    setPatients(updatePatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex md:gap-4">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <PatientList
          deletePatient={deletePatient}
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  );
}

export default App;
