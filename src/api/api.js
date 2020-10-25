import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/'
});

export default class api {
    static getTickets() {
        return axios.get('https://front-test.beta.aviasales.ru/search')
        .then(response => instance.get(`tickets?searchId=${response.data.searchId}`));
    }
}
