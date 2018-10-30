import Fact from "./Fact"

export default class FactService { 
    getFacts(): Fact[] {
        const factsJson = require('./facts.json');
        const facts = factsJson.all.map(item => {
            var fact = new Fact();
            fact.text = item.text;
            fact._id = item._id;
            return fact;
        });
        return facts;
    }
}