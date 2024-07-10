import React, { useEffect, useState } from 'react';
import { fetchPatientById } from '../services/fhirService';
import { useParams, useNavigate  } from 'react-router-dom';

import { Patient } from "../types";
import '../styles.css';



const  PatientDetail = () =>  {

    const navigate = useNavigate();
    const { id }: any = useParams();
    const [patient, setPatient] = useState<Patient | null>(null);

    const handleBack = () => {
      navigate('/');
    };

    useEffect(() => {
        const getPatient = async () => {
          const data: Patient = await fetchPatientById(id);
          console.log(data)
          console.log('here', data.address)
          setPatient(data);
        };
        getPatient();
      }, [id]);



    if (!patient) return <div>Loading...</div>;

    return(
        <div className="patient-detail-container">
            <h1>Patient Detail</h1>
            {patient.name?.[0]?.family && <p>Name: {patient.name?.[0].family}</p>}
            {patient?.gender && <p>Gender: {patient.gender}</p>}
            {patient?.birthDate && <p>Birth Date: {patient.birthDate}</p>}
            {patient.address?.[0]?.country && <p>Address: {patient.address[0].country}</p>}
            {patient.address?.[0]?.city && <p>City: {patient.address[0].city}</p>}
            {patient.address?.[0]?.state && <p>State: {patient.address[0].state}</p>}
            {patient.address?.[0]?.postalCode && <p>Postal Code: {patient.address[0].postalCode}</p>}
            <button className="back-button" onClick={handleBack}>Back</button>        
        </div>
    )  
}


export default PatientDetail;
 