export interface Patient {
    resourceType: string;
    id: string;
    name: {
      use: string;
      family: string;
      given: string[];
    }[];
    gender: string;
    birthDate: string;
    address: {
      use: string;
      line: string[];
      city: string;
      country: string;
      state: string;
      postalCode: string;
    }[];
  }
  