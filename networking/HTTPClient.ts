export default class HTTPClient {
    protected static BASE_URL = 'http://loadshedding.eskom.co.za/LoadShedding';

    protected static get(path: string, addTime: boolean = true): Promise<Response> {
        let uri = this.BASE_URL + path;

        if (addTime) {
            uri += (path.indexOf('?') > -1 ? '&' : '?') + '_=' + new Date().getTime();
        }

        return fetch(uri, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0',
            },
        });
    }
}
