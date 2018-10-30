import Fact from './Fact'
import FactService from './FactService'


export default class FactViewModel {
    factService: FactService;


    constructor(){
        this.factService = new FactService();
    }

    public Render() :void {
        const facts = this.factService.getFacts();

        for (let i = 0; i < facts.length; i++){
            let fact = facts[i];
            document.write(`<div class="card"><p class="card-text">${fact.text}</p><small>${fact._id}</small></div>`);
        }
    }
}

