class requestService {
    protocol = 'http';
    host = 'localhost';
    port = '3000';
    services = {
        'signin': 'user/sign-in',
        'signup': 'user/sign-up'
    };

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;

        this.protocol = 'http';
        this.host = '172.16.110.205';
        this.port = '3000';
    }

    ask(name, data = {}) {
        let url = this.getUrl(name);

        let request = this.$http({ url, method: 'post', data });
        return request;
    }

    getAddress() {
        return `${this.protocol}://${this.host}:${this.port}/`;
    }

    getUrl(name) {
        let address = this.getAddress();
        let serviceUrl = this.services[name];

        if (address && serviceUrl) {
            return `${address}${serviceUrl}`;
        } else {
            return '';
        }
    }
}

export default requestService;