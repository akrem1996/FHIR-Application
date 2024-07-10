import { fetchPatients } from "../services/fhirService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Patient } from "../types";
import '../styles.css'

const  PatientList = () =>  {

    const [patients, setPatients] = useState<Patient[]>([])

    useEffect(() => {
        const getPatients = async () => {
          const data: Patient[] = await fetchPatients();
          setPatients(data)
        };
        getPatients();
    }, []);


    return(
        <div className="patient-list-container">
            <h1> Patient list </h1>
            <ul className="patient-list">
                {patients.map((patient) => (
                    <li key={patient.id} className="patient-list-item">
                        <Link to={`/patient-details/${patient.id}`} className="patient-link">
                            {patient.name?.[0]?.family || "unknown"}
                        </Link>
                    </li>
                ))}  
            </ul>
            
        </div>
    )  
}


export default PatientList;
 