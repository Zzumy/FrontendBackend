export default class DataService {
    getAxiosData(url, callback, leiro) {
        axios
            .get(url)
            .then(function (response) {
                console.log("response", response);
                console.log("data", response.data);
                console.log("státusz", response.request.status);
                console.log("text", response.statusText);
                callback(response.data, leiro);
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
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
    deleteAxiosData(url, id) {
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
}
