import FHIR from "fhirclient"


const client = FHIR.client('http://hapi.fhir.org/baseR4');

export const fetchPatients = async () => {
  try {
    const response = await client.request('Patient');
    return response.entry.map((entry: any) => entry.resource);
  }  catch (error){
    throw new Error('Failed to fetch patients');
  }
};

export const fetchPatientById = async (id: string) => {
  try {
    const response = await client.request(`Patient/${id}`);
    return response;
  } catch(erro){
    throw new Error('Failed to fetch patients');
  }
};
