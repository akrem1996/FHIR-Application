import React, { useEffect, useState } from 'react';
import { fetchPatientById } from '../services/fhirService';
import { useParams } from 'react-router-dom';
import '../styles.css';



const  PatientDetail = () =>  {

    const { id }: any = useParams();
    const [patient, setPatient] = useState<any>(null);


    useEffect(() => {
        const getPatient = async () => {
          const data = await fetchPatientById(id);
          console.log(data)
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
            {/* <p>Address: {patient.address[0].line.join(', ')}, {patient.address[0].city}, {patient.address[0].state}, {patient.address[0].postalCode}</p> */}
        </div>
    )  
}


export default PatientDetail;
 