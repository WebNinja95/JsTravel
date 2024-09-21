function TravelPlanner() {
    this.destinations = [];
    this.flights = [];
    this.accommodations = [];
    
   
    this.addDestination = function(destination) {
        this.destinations.push(destination);
    };
    
    
    this.addFlight = function(flight) {
        this.flights.push(flight);
    };
    
    
    this.addAccommodation = function(accommodation) {
        this.accommodations.push(accommodation);
    };
    
    
    this.calculateTotalCost = function() {
        
    };
    this.listDestinations = function(){
        return this.destinations;
    }
    this.getDestinationByName = function(name){
        return this.destinations.find(dest => dest.name === name);
    }
}

function Destination(city, country, baseCost) {
    this.city = city;
    this.country = country;
    this.baseCost = baseCost;

    this.getInfo = function() {
        return `${this.city}, ${this.country}, Base Cost: $${this.baseCost}`;
    };

    this.updateBaseCost = function(newCost) {
        this.baseCost = newCost;
    };
}

function Flight(Departure,arrival_cities,Distance,price){
    this.Departure = Departure;
    this.arrival_cities = arrival_cities;
    this.Distance = Distance;
    this.price = price;

    this.calculateCost = function(){
        return Distance*price;
    }
    this.updatePricePerMile = function(newPrice){
        this.price = newPrice;
    }
}

function Accommodation(hotel,cost,numOfNight){
    this.hotel = hotel;
    this.cost = cost;
    this.numOfNight = numOfNight;

    this.calculateCost = function(){
        return cost*numOfNight;
    }
    this.applySeasonalDiscount = function(discount){
        return this.calculateCost()-discount;
    }
}
