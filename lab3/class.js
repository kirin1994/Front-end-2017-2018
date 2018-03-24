function Engine(hp, nM) {
    "use strict";
    this.hp = hp;
    this.nM = nM;
}

Engine.prototype.start = function () {
    "use strict";
    console.log("Engine started");
};

Engine.prototype.getEngineParameters = function () {
    "use strict";
    console.log("Engine: \n HP: " + this.hp + "\n nM: " + this.nM);
};

Engine.prototype.chipTuning = function (hpImprove, nMImprove) {
    "use strict";
    this.hp += hpImprove;
    this.nM += nMImprove;
};

function DieselEngine(hp, nM, dpf) {
    "use strict";
    Engine.call(this, hp, nM);
    this.dpf = dpf;
}

DieselEngine.prototype = Object.create(Engine.prototype);
DieselEngine.prototype.constructor = DieselEngine;
DieselEngine.prototype.hasDPF = function () {
    "use strict";
    console.log("Car with dpf: " + this.dpf);
};

var diesel = new DieselEngine(184, 220, true);
console.log("Core version HP: " + diesel.hp);
diesel.chipTuning(44, 30);
console.log("Chiptuning version HP: " + diesel.hp);
diesel.hasDPF();
diesel.start();