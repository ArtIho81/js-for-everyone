import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    #fighterDetailsPath = 'details/fighter/';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(id) {
        // todo: implement this method
        const endpoint = `${this.#fighterDetailsPath}${id}.json`;
        try {
            const apiResult = await callApi(endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }
}

const fighterService = new FighterService();

export default fighterService;
