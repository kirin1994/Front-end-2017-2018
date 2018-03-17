var MechanicModule = {};
var CarModule = {};
var ClientModule = {};

CarModule = (function () {

    var CarInterface = {
        brand: "BMW",
        model: "E90",
        productionYear: "2011",
        parts: {
            engine: {
                price: "20000",              
                repairPriority : "high"
            },
            tires: {
                price: "3000",
                repairPriority : "low"
            },
            oil: {
                price: "300",
                repairPriority : "high"
            },
            ligths: {
                price: "1500",
                repairPriority : "low"
            },
            transmission: {
                price: "7000",
                repairPriority : "medium"
            },
        },

        GetCarInformations() {
            console.log("Car: " +
                "\n brand: " + this.brand +
                "\n model: " + this.model +
                "\n production year: " + this.productionYear)
        }
    }

    return CarInterface;
}());


ClientModule = (function () {

    var ClientInterface = {
        name: "Jan",
        surname: "Kowalski",
        city: "Gdańsk",
        street: "Naprawcza",
        discount : 10,

        GetClientInformations: function () {
            console.log("Client: " +
                "\n name: " + this.name +
                "\n surname: " + this.surname +
                "\n city: " + this.city)
        }
    }

    return ClientInterface;
}());

MechanicModule = (function () {

    var MechanicInterface = {
        name: "Adrian",
        specialization: "Cars",

        GetOrder(car, client) {
            car.GetCarInformations();
            client.GetClientInformations();
        },

        Overwiev(car){
            var highPriorityParts = 0;
            Object.keys(car.parts).forEach(function(part){
                if(car.parts[part].repairPriority === "high"){
                    highPriorityParts += 1;
                }
            });

            console.log("You need to repair " + highPriorityParts + " parts as fast as possible.")
        },

        CalcDiscount(car, client){
            var discount = function(val){
                var finalPrice = val - val * client.discount/100;
                console.log("Price after discount " + finalPrice)
            }

            Object.keys(car.parts).map(function(part){
                discount(car.parts[part]["price"])
            })
        },

        GetInformationAboutMechanic() {
            console.log("Name: " + this.name + ", Specialization: " + this.specialization)
        }
    }

    return MechanicInterface;
}());

MechanicModule.GetOrder(CarModule, ClientModule);
MechanicModule.GetInformationAboutMechanic();
MechanicModule.CalcDiscount(CarModule, ClientModule);
MechanicModule.Overwiev(CarModule);