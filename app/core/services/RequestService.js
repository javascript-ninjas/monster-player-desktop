import ServerConfig from './../config/ServerConfig';

class RequestService {
    protocol = 'http';
    host = 'localhost';
    port = '3000';
    services = {};

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;

        // Setup server params.
        this.protocol = ServerConfig.protocol;
        this.host = ServerConfig.host;
        this.port = ServerConfig.port;
        this.services = ServerConfig.services;
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

export default RequestService;