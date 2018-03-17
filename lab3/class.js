function Engine(hp, nM){
    this.hp = hp;
    this.nM = nM;
};

Engine.prototype.start = function(){
    console.log("Engine started")
};

Engine.prototype.getEngineParameters = function(){
    console.log("Engine: \n HP: " + this.hp + "\n nM: " +this.nM );
};

Engine.prototype.chipTuning = function(hpImprove, nMImprove){
    this.hp += hpImprove;
    this.nM += nMImprove;
};

function DieselEngine(hp, nM, fuel){
    Engine.chipTuning
    //To DO 
};