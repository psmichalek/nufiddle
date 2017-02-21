import globals from '../../globals.js';

export default class ProviderService {

    constructor($http,$timeout){
        Object.assign(this,{$http,$timeout});
        this.data = {
            apiProviders : globals.apiProviders
        }
    }

    getApiProviderList(){
        return new Promise( (resolve,reject) => {
            this.$timeout( ()=>{ resolve(this.data.apiProviders) },1500 )
        });
    }

}
