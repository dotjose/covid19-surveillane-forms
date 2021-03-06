const CommunityInitialState = {
  biographicalData: {
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
    dateOfBirth: "",
    gender: "",
    preferredLanguage: "",
    occupation: "",
    nationality: "",
    passportNumber: "",
    governmentIssuedId: "",
    contactInformation: {
      address: {
        country: "",
        region: "",
        city: "",
        postalCode: "",
        street: "",
        building: "",
        customField1: "",
        customField2: "",
      },
      email: "",
      phoneNumber: "",
    },
  },
  riskFromContact: {
    hasRecentlyTraveled: false,
    contactWithSuspected: false,
    contactWithConfirmed: false,
    worksAtOrVisitedHealthFacility: false,
  },
  underlyingConditions: {
    chronicLungDisease: false,
    heartDisease: false,
    liverDisease: false,
    renalDisease: false,
    autoimmuneDisease: false,
    cancer: false,
    diabetes: false,
    hiv: false,
    pregnancy: false,
  },
  symptoms: {
    fever: false,
    cough: false,
    shortnessOfBreath: false,
    fatigue: false,
    headache: false,
    runnyNose: false,
    feelingUnwell: false,
  },
  // unique
  latitude: "",
  longitude: "",
  source: "",
};

export default CommunityInitialState;
