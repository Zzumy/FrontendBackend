export class DataService {
    constructor() {
        axios.defaults.baseURL = "http://localhost:5502";
    }
    getAxiosData(url, callback) {
        console.log(url);
        axios
            .get(url)
            .then(function (response) {
                console.log("response", response);
                console.log("data", response.data);
                console.log("status", response.status);
                console.log("statusText", response.statusText);
                console.log("headers", response.headers);
                console.log("config", response.config);
                callback(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("finally");
            });
    }
    postAxiosData(url, data) {
        axios
            .post(url, data)
            .then((response) => {
                console.log("response", response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    putAxiosData(url, data) {
        console.log(data);
        console.log(`${url}/${data.id}`, data);
        axios
            .put(`${url}/${data.id}`, data)
            .then((response) => {
                console.log("response", response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    deleteAxiosData(url, id) {
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("response", response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
}
