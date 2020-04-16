const CommunityInitialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  age: "",
  sex: "",
  language: "",
  phoneNumber: "",
  occupation: "",
  address: {
    country: "",
    region: "",
    city: "",
    postalCode: "",
    street: "",
    building: "",
  },
  latitude: 0,
  longitude: 0,
  symptom: {
    fever: false,
    cough: false,
    shortnessOfBreath: false,
    fatigue: false,
    headache: false,
    runnyNose: false,
    feelingUnwell: false,
  },

  formStatus: "",
  travelHx: false,
  contactWithSuspected: false,
  contactWithConfirmed: false,
  healthFacility: false,
  dataSource: "",
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
};

export default CommunityInitialState;
