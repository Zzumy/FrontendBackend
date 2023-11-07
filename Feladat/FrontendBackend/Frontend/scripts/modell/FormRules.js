export const FormRules = {
    vnev: {
        megjelenes: "Vezetéknév",
        tipus: "text",
        value: "",
        placeholder: "Vezetéknév",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "név nagybetűvel kezdődok és legalább 3 karakter",
    },

    knev: {
        megjelenes: "Keresztnév",
        tipus: "text",
        value: "",
        placeholder: "Keresztnév",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "név nagybetűvel kezdődok és legalább 3 karakter",
    },

    szul: {
        megjelenes: "Születési év",
        tipus: "date",
        placeholder: "",
        regex: {
            min: "1000-01-01",
            max: "10000-12-31",
        },
        validalas: "1000.01.01-10000-12-31",
    },
};
