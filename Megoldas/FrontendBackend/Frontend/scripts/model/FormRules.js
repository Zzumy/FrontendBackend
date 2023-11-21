export const FormRules = {
    nev: {
      megjelenes: "Név",
      tipus: "text",
      value: "",
      placeholder: "Név",
      regex: "[A-Z][a-z]{2,15}", //pattern is lehet
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
    },
    szul: {
      megjelenes: "Születési év",
      tipus: "date",
      regex: {
        min: "1900-01-01",
        max: "2023-12-31",
      }
    },
  };