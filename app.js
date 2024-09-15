//vars
const travelBudget = 1200;
const destinationTemp = 34;
const flightBooked = true;
const hotelBooked = true;
const chosenPackagePrice = 200;
const alternativePackagePrice =100;



//question 1
function BudgetChecking(travelBudget){
    if(travelBudget>1000){
        console.log('luxury travel option is available');
    }
    else{
        console.log('looking for travel budget');
    }
}

//question 2
function destinationTempCheck(destinationTemp){
    if(destinationTemp>15 && destinationTemp<27){
        console.log('ideal wether for the trip');
    }
    else{
        console.log('Consider another destination or time');
    }
}

//question 3
function FlightandHotelBooking(flightBooked,hotelBooked){
    if(flightBooked){
        if(hotelBooked){
            console.log('ur travel plan is set');
        }
        else{
            console.log('u need to book a hotel');
        }
    }
    else{
        console.log('u need to book a flight');
    }
}

//question 4

function ComparingTravelPackagePrice(chosenPackagePrice,alternativePackagePrice){
    if(chosenPackagePrice == alternativePackagePrice){
        console.log('best price');
    }
    else if(chosenPackagePrice < alternativePackagePrice){
        console.log('consider switching for another price');
    }
}

//i know this subject so i go to the next ex..

const dayofweek = 4;

switch(dayofweek){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wedenesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('friday');
        break;
    case 7:
        console.log('saturday');
        break;
}

// go to next task this subject fine for me.
// Loops, Matrix

const activityDurations1 = [2, 3, 1];
let totalDuration1 = 0;

for (let i = 0; i < activityDurations1.length; i++) {
  totalDuration1 += activityDurations1[i];
}

console.log("1. Sum of All Activities' Durations:", totalDuration1);


const activityDurations2 = [2, 3, 1];
const longestActivity = Math.max(...activityDurations2);
console.log("2. Activity with the Longest Duration:", longestActivity);


const activityNames3 = ['Sightseeing', 'Hiking', 'Sightseeing'];
let activityCount = {};


for (let i = 0; i < activityNames3.length; i++) {
    let activity = activityNames3[i];
    if (activityCount[activity]) {
        activityCount[activity]++;
    } else {
        activityCount[activity] = 1;
    }
}


let mostFrequentActivity = '';
let maxCount = 0;

for (let activity in activityCount) {
    if (activityCount[activity] > maxCount) {
        maxCount = activityCount[activity];
        mostFrequentActivity = activity;
    }
}

console.log("3. Most Frequent Activity:", mostFrequentActivity);



const activityDurations4 = [2, 3, 1];
const shortestActivity = Math.min(...activityDurations4);
console.log("4. Shortest Activity Duration:", shortestActivity);



const transportationTypes5 = ['Car', 'Train', 'Car', 'Flight'];
let transportationCount = {};

for (let i = 0; i < transportationTypes5.length; i++) {
    let type = transportationTypes5[i];
    if (transportationCount[type]) {
        transportationCount[type]++;
    } else {
        transportationCount[type] = 1;
    }
}

console.log("5. Count Travel Segments by Transportation Type:", transportationCount);


const travelExpenses6 = [50, 100, 75, 125, 200];
let totalExpense = 0;

for (let i = 0; i < travelExpenses6.length; i++) {
  totalExpense += travelExpenses6[i];
}

let averageExpense = totalExpense / travelExpenses6.length;
console.log("6. Average Travel Expense:", averageExpense);


const travelExpenses7 = [50, 100, 75, 125, 200];
let highestExpense = travelExpenses7[0];

for (let i = 1; i < travelExpenses7.length; i++) {
  if (travelExpenses7[i] > highestExpense) {
    highestExpense = travelExpenses7[i];
  }
}

console.log("7. Highest Single Travel Expense:", highestExpense);


const travelExpenses8 = [50, 100, 75, 125, 200];
const budget = 100;
let underBudgetExpenses = [];

for (let i = 0; i < travelExpenses8.length; i++) {
  if (travelExpenses8[i] <= budget) {
    underBudgetExpenses.push(travelExpenses8[i]);
  }
}

console.log("8. Expenses Under Budget:", underBudgetExpenses);



const categoryExpenses9 = [
    [100, 200],
    [150, 175],
    [120, 250],
  ];
  let totalExpensesPerCategory = [];
  
  for (let i = 0; i < categoryExpenses9.length; i++) {
    let total = 0;
    for (let j = 0; j < categoryExpenses9[i].length; j++) {
      total += categoryExpenses9[i][j];
    }
    totalExpensesPerCategory.push(total);
  }
  
  console.log("9. Total Expenses for Each Category:", totalExpensesPerCategory);


  const routeDistances10 = [
    [120, 300],
    [150, 175],
    [100, 250],
  ];
  let shortestRoutes = [];
  
  for (let i = 0; i < routeDistances10.length; i++) {
    let shortest = routeDistances10[i][0];
    for (let j = 1; j < routeDistances10[i].length; j++) {
      if (routeDistances10[i][j] < shortest) {
        shortest = routeDistances10[i][j];
      }
    }
    shortestRoutes.push(shortest);
  }
  
  console.log("10. Shortest Route in Each Travel Plan:", shortestRoutes);



  const activityDurationsMatrix11 = [
    [2, 3],
    [1, 4],
    [3, 2],
  ];
  let averageDurations = [];
  
  for (let i = 0; i < activityDurationsMatrix11.length; i++) {
    let total = 0;
    for (let j = 0; j < activityDurationsMatrix11[i].length; j++) {
      total += activityDurationsMatrix11[i][j];
    }
    averageDurations.push(total / activityDurationsMatrix11[i].length);
  }
  
  console.log("11. Average Duration per Activity Type:", averageDurations);



  const destinationRatingMatrix12 = [
    [4.5, 4.7],
    [4.8, 4.6],
    [4.9, 5.0],
  ];
  let highestRatings = [];
  
  for (let i = 0; i < destinationRatingMatrix12.length; i++) {
    let highest = destinationRatingMatrix12[i][0];
    for (let j = 1; j < destinationRatingMatrix12[i].length; j++) {
      if (destinationRatingMatrix12[i][j] > highest) {
        highest = destinationRatingMatrix12[i][j];
      }
    }
    highestRatings.push(highest);
  }
  
  console.log("12. Highest Rating in Each Category:", highestRatings);



  const regionRecommendationMatrix13 = [
    [5, 7],
    [8, 6],
    [9, 7],
  ];
  let totalRecommendations = [];
  
  for (let i = 0; i < regionRecommendationMatrix13.length; i++) {
    let total = 0;
    for (let j = 0; j < regionRecommendationMatrix13[i].length; j++) {
      total += regionRecommendationMatrix13[i][j];
    }
    totalRecommendations.push(total);
  }
  
  console.log("13. Total Highly Recommended Destinations in Each Region:", totalRecommendations);



  const mustVisitRatingMatrix14 = [
    [4.5, 4.7],
    [4.9, 5.0],
    [4.8, 4.9],
  ];
  let totalRatingsPerRegion = [];
  
  for (let i = 0; i < mustVisitRatingMatrix14.length; i++) {
    let total = 0;
    for (let j = 0; j < mustVisitRatingMatrix14[i].length; j++) {
      total += mustVisitRatingMatrix14[i][j];
    }
    totalRatingsPerRegion.push(total);
  }
  
  console.log("14. Total Ratings for Must-Visit Destinations by Region:", totalRatingsPerRegion);

  
  // next task


  const travelItinerary = ['paris','tokyo','new york'];
  const destinationtocheck = 'tokyo';

  for(let i = 0;i<travelItinerary.length;i++){
    if(travelItinerary[i]===destinationtocheck){
      console.log('this same destination');
    }
  }

  const travelDates2 = [
    '2023-07-01',
    '2023-07-15',
    '2023-08-01'
  ];
  
  const reversedTravelDates = travelDates2.reverse();
  
  console.log("Reversed Travel Dates:", reversedTravelDates);

  const travelActivities3 = [
    'Sightseeing',
    'Hiking',
    'Dining'
  ];
  
  const travelActivitiesString = travelActivities3.join(', ');
  
  console.log("Travel Activities:", travelActivitiesString);

  const destinationList5 = [
    'Paris',
    'Tokyo',
    'New York City'
  ];
  const specificDestination5 = 'New York City';
  
  const index = destinationList5.indexOf(specificDestination5);
  
  console.log(`Index of ${specificDestination5}:`, index);

  const upcomingTrips6 = [
    'Greece',
    'Iceland',
    'Japan'
  ];
  
  const removedDestination = upcomingTrips6.pop();
  
  console.log("Updated Trip List:", upcomingTrips6);
  console.log("Removed Destination:", removedDestination);

  const bucketListDestinations7 = [
    'Machu Picchu',
    'Great Wall of China'
  ];
  const newDestination7 = 'Aurora Australis in Antarctica';
  
  bucketListDestinations7.unshift(newDestination7);
  
  console.log("Updated Bucket List:", bucketListDestinations7);


  const europeanCapitals8 = ['Paris', 'Berlin', 'Madrid'];

const removedCapital = europeanCapitals8.shift();

console.log("Removed Capital:", removedCapital);
console.log("Updated Capitals List:", europeanCapitals8);

const beachDestinations9 = ['Maldives', 'Bora Bora'];
const cityDestinations9 = ['New York', 'Tokyo'];

const allDestinations9 = beachDestinations9.concat(cityDestinations9);
console.log("All Destinations:", allDestinations9);

const destinationList10 = ['Paris', 'Tokyo', 'New York City'];

const sortedDestinations10 = destinationList10.sort();
console.log("Alphabetically Sorted Destinations:", sortedDestinations10);

const packingListString11 = 'Passport,Sunscreen,Camera';

const packingListArray11 = packingListString11.split(',');
console.log("Packing List Array:", packingListArray11);


const tripItinerary12 = [
  'Visit Louvre',
  'Eiffel Tower',
  'Seine River Cruise',
];
const n12 = 2;

const firstFewDays12 = tripItinerary12.slice(0, n12);
console.log("First Few Days of Itinerary:", firstFewDays12);

const travelWishlist13 = [
  'Northern Lights in Norway',
  'Safari in Kenya',
  'Great Barrier Reef'
];


travelWishlist13.splice(0, travelWishlist13.length);

console.log("Empty Wishlist:", travelWishlist13);

const destinations14 = ['Paris', 'Tokyo'];
const newDestination14 = 'New York City';


destinations14.push(newDestination14);

console.log("Updated Destinations:", destinations14);

const destinations15 = [
  'Paris',
  'Tokyo',
  'New York City'
];


const lastDestination = destinations15.pop();

console.log("Updated Destinations:", destinations15);
console.log("Removed Destination:", lastDestination);


const destinations16 = [
  'Paris',
  'Tokyo',
  'New York City',
];


const destinationsString = destinations16.join(', ');

console.log("Destinations String:", destinationsString);

const destinations17 = [
  'Paris',
  'Tokyo',
  'New York City'
];
const destinationToFind17 = 'Tokyo';

const indexx = destinations17.indexOf(destinationToFind17);

console.log("Index of Destination:", indexx);


