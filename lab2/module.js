var module = {}

module = (function(){
    var MechanicInterface = {
        name : 'Adrian',
        specialization : 'Cars',
        
        GetOrder(car){
            Console.log('Order recived, brand:' + car.brand + ', model:' + car.model + ', production year:' + car.productionYear)
        }
    }
}());

var car = {
    brand :'BMW',
    model : 'E90',
    productionYear : '2011'
}

module.MechanicInterface.GetOrder(car);