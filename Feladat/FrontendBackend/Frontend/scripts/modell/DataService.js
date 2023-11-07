export class DataService {
    getAxiosData(url, callback) {
        console.log(url);
        axios
            .get(url)
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
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
                console.log("válasz", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
}
