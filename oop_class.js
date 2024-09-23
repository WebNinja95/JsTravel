class Trip {
    
    constructor(destination, duration, distance) {
        this.#destination = '';
        this.#duration = 0;
        this.#distance = 0;
        this.#activities = [];
        this.destination = destination;
        this.duration = duration;
        this.distance = distance;
    }

    
    get destination() {
        return this.#destination;
    }

    get duration() {
        return this.#duration;
    }

    get distance() {
        return this.#distance;
    }

    set destination(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            return console.log('plz enter an String');
        }
        this.#destination = value;
    }

    set duration(value) {
        if (typeof value !== 'number' || value <= 0) {
            return console.log('Duration must be a positive number.');
        }
        this.#duration = value;
    }

    set distance(value) {
        if (typeof value !== 'number' || value <= 0) {
            return console.log('Distance must be a positive number.');
        }
        this.#distance = value;
    }

    addActivity(activity) {
        if (typeof activity !== 'string' || activity.trim() === '') {
            return console.log('Activity must be a non-empty string');
        }
        this.#activities.push(activity);
    }

    #calculateTotalCost() {
        const costPerDay = 100; 
        const costPerMile = 0.5; 
        return (this.#duration * costPerDay) + (this.#distance * costPerMile);
    }

    
    get totalCost() {
        return this.#calculateTotalCost();
    }

    displayDetails() {
        return `
        Trip Details:
        Destination: ${this.destination}
        Duration: ${this.duration} days
        Distance: ${this.distance} miles
        Total Cost: $${this.totalCost}
        Planned Activities: ${this.#activities.length > 0 ? this.#activities.join(', ') : 'None'}
        `;
    }

    #destination;
    #duration;
    #distance;
    #activities;
}


const trip = new Trip('Hawaii', 5, 3000);
trip.addActivity('Surfing');
trip.addActivity('Snorkeling');
console.log(trip.displayDetails());

class AdventureTrip extends Trip {
    
    constructor(destination, duration, distance, difficultyLevel, gearList) {
        super(destination, duration, distance); 
        this.#difficultyLevel = '';
        this.#gearList = [];
        this.difficultyLevel = difficultyLevel;
        this.gearList = gearList;
    }

    
    get difficultyLevel() {
        return this.#difficultyLevel;
    }

    set difficultyLevel(level) {
        const validLevels = ['easy', 'moderate', 'hard'];
        if (!validLevels.includes(level)) {
            return console.log(`Invalid difficulty level. Choose from: ${validLevels.join(', ')}`);
        }
        this.#difficultyLevel = level;
    }

    get gearList() {
        return this.#gearList;
    }

    set gearList(list) {
        if (!Array.isArray(list) || !list.every(item => typeof item === 'string')) {
            return console.log('Gear list must be an array of strings.');
        }
        this.#gearList = list;
    }

    
    displayDetails() {
        return `
        ${super.displayDetails()}
        Difficulty Level: ${this.difficultyLevel}
        Recommended Gear: ${this.gearList.length > 0 ? this.gearList.join(', ') : 'None'}
        `;
    }

    
    #difficultyLevel;
    #gearList;
}

const adventureTrip = new AdventureTrip('Alaska', 7, 1500, 'hard', ['Tent', 'Hiking Boots', 'Water Filter']);
console.log(adventureTrip.displayDetails());

class CulturalTrip extends Trip {
    
    constructor(destination, duration, distance, language, historicalSites) {
        super(destination, duration, distance); 
        this.#language = '';
        this.#historicalSites = [];
        this.language = language;
        this.historicalSites = historicalSites;
    }

    
    get language() {
        return this.#language;
    }

    set language(lang) {
        if (typeof lang !== 'string' || lang.trim() === '') {
            return console.log('Language must be a non-empty string.');
        }
        this.#language = lang;
    }

    get historicalSites() {
        return this.#historicalSites;
    }

    set historicalSites(sites) {
        if (!Array.isArray(sites) || !sites.every(site => typeof site === 'string')) {
            return console.log('Historical sites must be an array of strings.');
        }
        this.#historicalSites = sites;
    }

    displayDetails() {
        return `
        ${super.displayDetails()}
        Language: ${this.language}
        Historical Sites: ${this.historicalSites.length > 0 ? this.historicalSites.join(', ') : 'None'}
        `;
    }

    #language;
    #historicalSites;
}


const culturalTrip = new CulturalTrip('Rome', 5, 800, 'Italian', ['Colosseum', 'Pantheon', 'Vatican City']);
console.log(culturalTrip.displayDetails());

class Traveler {
    
    constructor(name) {
        this.#name = '';
        this.#plannedTrips = [];
        this.name = name; 
    }

    
    get name() {
        return this.#name;
    }

    set name(newName) {
        if (typeof newName !== 'string' || newName.trim() === '') {
            return console.log('Name must be a non-empty string.');
        }
        this.#name = newName;
    }

    
    #plannedTrips;

    
    addTrip(trip) {
        if (trip instanceof Trip) {
            this.#plannedTrips.push(trip);
        } else {
            return console.log('Only instances of Trip or its subclasses can be added.');
        }
    }

    
    planActivity(trip, activity) {
        const tripIndex = this.#plannedTrips.indexOf(trip);
        if (tripIndex !== -1) {
            trip.addActivity(activity);
        } else {
            return `You can only plan activities for trips that are already planned.`;
        }
    }

    
    displayAllTrips() {
        if (this.#plannedTrips.length === 0) {
            return `${this.name} has no planned trips.`;
        }

        return this.#plannedTrips.map((trip, index) => {
            return `Trip ${index + 1}:\n${trip.displayDetails()}\n---`;
        }).join('\n');
    }

    
    #name;
}


const traveler = new Traveler('John Doe');

const adventureTrip2 = new AdventureTrip('Alaska', 7, 1500, 'hard', ['Tent', 'Hiking Boots', 'Water Filter']);
const culturalTrip2 = new CulturalTrip('Rome', 5, 800, 'Italian', ['Colosseum', 'Pantheon', 'Vatican City']);


traveler.addTrip(adventureTrip2);
traveler.addTrip(culturalTrip2);


traveler.planActivity(adventureTrip2, 'Mountain Climbing');
traveler.planActivity(culturalTrip2, 'Vatican Tour');


console.log(traveler.displayAllTrips());

