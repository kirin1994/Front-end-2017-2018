var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EngineDealer = /** @class */ (function () {
    function EngineDealer(engineList) {
        this.engineList = engineList;
    }
    EngineDealer.prototype.addNewEngine = function (engine) {
        this.engineList.push(engine);
    };
    EngineDealer.prototype.showAllEngines = function () {
        this.engineList.forEach(this.getEngineParameters);
    };
    EngineDealer.prototype.tuneAllEngines = function () {
        console.log();
        this.engineList.forEach(function (n) { n.hp += 20; console.log("Horse power of engine after tune up " + n.hp); });
    };
    EngineDealer.prototype.getEngineParameters = function (engine) {
        console.log("Engine: \n HP: " + engine.hp + " \n nM: " + engine.nM);
    };
    return EngineDealer;
}());
var Engine = /** @class */ (function () {
    function Engine(hp, nM) {
        this.hp = hp;
        this.nM = nM;
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    Engine.prototype.chipTuning = function (hpImprove, nMImprove) {
        this.hp += hpImprove;
        this.nM += nMImprove;
    };
    ;
    return Engine;
}());
var DieselEngine = /** @class */ (function (_super) {
    __extends(DieselEngine, _super);
    function DieselEngine(hp, nM, dpf) {
        var _this = _super.call(this, hp, nM) || this;
        _this.dpf = dpf;
        return _this;
    }
    DieselEngine.prototype.hasDPF = function () {
        console.log("Car with dpf: " + this.dpf);
    };
    ;
    return DieselEngine;
}(Engine));
var enginetable = [];
var diesel1 = new DieselEngine(184, 220, true);
enginetable.push(diesel1);
var petrol1 = new Engine(230, 255);
enginetable.push(petrol1);
var diesel2 = new DieselEngine(350, 420, true);
enginetable.push(diesel2);
var engineDealer = new EngineDealer(enginetable);
engineDealer.showAllEngines();
engineDealer.tuneAllEngines();
engineDealer.showAllEngines();
