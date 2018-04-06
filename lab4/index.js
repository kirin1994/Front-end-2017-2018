class EngineDealer
{
    constructor(engineList)
    {
        this.engineList = engineList;
    }

    addNewEngine(engine)
    {
        this.engineList.push(engine);
    }

    showAllEngines()
    {
        this.engineList.forEach(this.getEngineParameters)
    }

    tuneAllEngines()
    {
        console.log()
        this.engineList.forEach(n => { n.hp += 20; console.log(`Horse power of engine after tune up ${n.hp}`) })
    }
 
    getEngineParameters(engine) {
        console.log(`Engine: \n HP: ${engine.hp} \n nM: ${engine.nM}`);
    }
}


class Engine {

    constructor(hp, nM) {
        this.hp = hp;
        this.nM = nM;
    }

    start() {
        console.log(`Engine started`);
    }
    
    chipTuning(hpImprove, nMImprove) {
        this.hp += hpImprove;
        this.nM += nMImprove;
    };

}

class DieselEngine extends Engine {
    constructor(hp, nM, dpf) {
        super(hp, nM);
        this.dpf = dpf;
    }

    hasDPF() {
        console.log(`Car with dpf: ${this.dpf}`);
    };
}

let enginetable = [];
let diesel1 = new DieselEngine(184, 220, true);
enginetable.push(diesel1);

let petrol1 = new Engine(230, 255);
enginetable.push(petrol1);

let diesel2 = new DieselEngine(350, 420, true);
enginetable.push(diesel2)

let engineDealer = new EngineDealer(enginetable);

engineDealer.showAllEngines();
engineDealer.tuneAllEngines();
engineDealer.showAllEngines();
