var mechanicModule = {};
var carModule = {};
var clientModule = {};

carModule = (function () {
"use strict";
    var carInterface = {
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
            }
        },

        getCarInformations() {
            console.log("Car: " +
                "\n brand: " + this.brand +
                "\n model: " + this.model +
                "\n production year: " + this.productionYear);
        }
    };

    return carInterface;
}());


clientModule = (function () {
"use strict";
    var clientInterface = {
        name: "Jan",
        surname: "Kowalski",
        city: "Gdańsk",
        street: "Naprawcza",
        discount : 10,

        getClientInformations: function () {
            console.log("Client: " +
                "\n name: " + this.name +
                "\n surname: " + this.surname +
                "\n city: " + this.city);
        }
    };

    return clientInterface;
}());

mechanicModule = (function () {
"use strict";
    var mechanicInterface = {
        name: "Adrian",
        specialization: "Cars",

        getOrder(car, client) {
            car.getCarInformations();
            client.getClientInformations();
        },

        overwiev(car){
            var highPriorityParts = 0;
            Object.keys(car.parts).forEach(function(part){
                if(car.parts[part].repairPriority === "high"){
                    highPriorityParts += 1;
                }
            });

            console.log("You need to repair " + highPriorityParts + " parts as fast as possible.");
        },

        calcDiscount(car, client){
            var discount = function(val){
                var finalPrice = val - val * client.discount/100;
                console.log("Price after discount " + finalPrice);
            };

            Object.keys(car.parts).map(function(part){
                discount(car.parts[part].price);
            });
        },

        getInformationAboutMechanic() {
            console.log("Name: " + this.name + ", Specialization: " + this.specialization);
        }
    };

    return mechanicInterface;
}());

mechanicModule.getOrder(carModule, clientModule);
mechanicModule.getInformationAboutMechanic();
mechanicModule.calcDiscount(carModule, clientModule);
mechanicModule.overwiev(carModule);