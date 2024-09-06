import queryString from 'query-string';

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

export default class CallApi {
    static get(url, options = {}) {
        const { params = {} } = options;
        const queryStringParams = {
            api_url: API_URL,
            ...params
        };
        
        return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
            {
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                }
            }
        );
    }
    static post(url, options = {}) {
        const { params = {}, body = {}} = options;
        const queryStringParams = {
            api_url: API_URL,
            ...params
        };
        return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body) 
            }
        );
    }
}

