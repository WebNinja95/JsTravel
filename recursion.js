
//ex1
function calculateTotalTripDays(tripDurations) {
    if (tripDurations.length === 0) {
      return 0;
    }
  
    // Recursive case: take the first element and add it to the total of the rest of the array
    return tripDurations[0] + calculateTotalTripDays(tripDurations.slice(1));
  }
// console.log(calculateTotalTripDays([2,4,6,8]));

//ex2
function CountCities(Cities){
    if(Cities.length === 0){
        return 0;
    }
    return Cities[0].length + CountCities(Cities.slice(1));
}
//ex3
function FindDestination(trips,city){
    Object.keys(tripDetails)
}
const tripDetails = { Europe: { France: 'Paris', Italy: 'Rome' }, USA: { NY: 'New York' } };


//ex4

function calculateAverageDistance(distances) {
    if (distances.length === 0) {
      return 0;
    }
    return (distances[0] + calculateAverageDistance(distances.slice(1)) * (distances.length - 1)) / distances.length;
}

console.log(calculateAverageDistance([200, 150, 400, 100]));  // Output: 212.5
//ex5
function calculateTotalCost(trip) {
    if (typeof trip === 'number') {
        return trip;
    }
    let totalCost = 0;

    for (let i = 0; i < trip.length; i++) {
        if (Array.isArray(trip[i])) {
            totalCost += calculateTotalCost(trip[i]);
        } else {
            totalCost += trip[i];
        }
    }

    return totalCost;
}
//ex6
function longestTripDuration(trips) {
    if (trips.length === 0) {
        return 0;
    }

    return Math.max(trips[0], longestTripDuration(trips.slice(1)));
}

//ex7
function listAllCities(trips) {
    if (trips.length === 0) {
        return [];
    }

    return trips[0].concat(listAllCities(trips.slice(1)));
}

//ex8
function mostExpensiveTrip(tripCosts) {
    if (tripCosts.length === 0) {
        return 0;
    }

    const firstTripCost = tripCosts[0].reduce((acc, cost) => acc + cost, 0);

    return Math.max(firstTripCost, mostExpensiveTrip(tripCosts.slice(1)));
}

//ex9
function countTransfers(trip) {
    if (trip === null) {
        return 0;
    }
    return 1 + countTransfers(trip.flight2 || trip.flight3 || null);
}
//ex10
function flattenCities(cities) {
    if (cities.length === 0) {
        return [];
    }

    
    const first = Array.isArray(cities[0]) ? flattenCities(cities[0]) : [cities[0]];
    
    
    return first.concat(flattenCities(cities.slice(1)));
}

//ex11
function totalAccommodationCost(trips) {
    if (trips.length === 0) {
        return 0;
    }

    const firstTripCost = trips[0].hotel + trips[0].food;
    
    return firstTripCost + totalAccommodationCost(trips.slice(1));
}
//ex12
function findLongestCityName(cities) {
    if (cities.length === 0) {
        return '';
    }

    
    const flattenedCities = cities.flat();

    
    const longestCity = flattenedCities.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');

    return Math.max(longestCity.length, findLongestCityName(cities.slice(1)));
}


