var MechanicModule = {}
var CarModule = {}

CarModule = (function () {

    var CarInterface = {
        brand: 'BMW',
        model: 'E90',
        productionYear: '2011',

        GetCarInformations()
        {
            console.log('Car: ' + 
            '\n brand: ' + this.brand +
            '\n model: ' + this.model +
            '\n production year: ' + this.productionYear)
        }
    }

    return CarInterface;
}());


ClientModule = (function () {

    var ClientInterface = {
        name: 'Jan',
        surname: 'Kowalski',
        city: 'Gdańsk',
        street: 'Naprawcza',

        GetClientInformations : function()
        {
            console.log('Client: ' +
            '\n name: ' + this.name +
            '\n surname: ' + this.surname + 
            '\n city: ' + this.city)
        }
    }

    return ClientInterface;
}());

MechanicModule = (function () {

    var MechanicInterface = {
        name: 'Adrian',
        specialization: 'Cars',

        GetOrder(car, client) {
            car();
            client();//SAWP THIS ON PREV VERS
        },

        GetInformationAboutMechanic() {
            console.log('Name: ' + this.name + ', Specialization: ' + this.specialization)
        }
    }

    return MechanicInterface;
}());

MechanicModule.GetOrder(CarModule.GetCarInformations, ClientModule.GetClientInformations);
MechanicModule.GetInformationAboutMechanic();