export const API_URL = "https://localhost:7212";

export const fetchApi = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (response.status === 201 || response.status === 204) {
                    resolve(null);
                } else if (response.status < 400) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(response => {
                if (response.status !== 201 || response.status !== 204) {
                    response.json().then(error => {
                        reject(error);
                    });
                } else {
                    reject({ error: "No content" });
                }
            });
    });
};


