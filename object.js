//ex1
const destination = {
    name: "Tel Aviv",
    country: "Israel",
    yearVisited: 2023,
    activities: ["sharona", "Museum tours", "Fish Market"],
    ratings: [4.5, 5, 4],
    
    getAverageRating: function() {
        let total = 0;
        for (let i = 0; i < this.ratings.length; i++) {
          total += this.ratings[i];
        }
        return total / this.ratings.length;
      }
  };
  //ex2
  destination.landmarks = [
    { name: "Eiffel Tower", description: "An iconic symbol of Paris." },
    { name: "Louvre Museum", description: "World's largest art museum." }
  ];
  
  // Log the second activity using dot notation and bracket notation
  console.log("Second Activity (Dot Notation):", destination.activities[1]);
  console.log("Second Activity (Bracket Notation):", destination['activities'][1]);
  
  // Log the name of the second landmark using dot notation and bracket notation
  console.log("Second Landmark Name (Dot Notation):", destination.landmarks[1].name);
  console.log("Second Landmark Name (Bracket Notation):", destination['landmarks'][1]['name']);
  
//ex3

destination.yearVisited = 2024;
destination.ratings.push(3.4);
delete destination.country;
destination.landmarks[0].description = "An iconic iron lattice tower";
destination['landmarks'][0]['description'] = "An iconic iron lattice tower";
console.log(destination.hasOwnProperty('ratings'));

//ex4

const destinations = [
  {
    name: "Eiffel Tower",
    details: {
      visitorsPerYear: 7000000,
      entryFee: "25 USD"
    }
  },
  {
    name: "Great Wall of China",
    details: {
      visitorsPerYear: 10000000,
      entryFee: "60 CNY"
    }
  }
];

console.log(destinations[0].details.visitorsPerYear);

function calculateAverageVisitors(destinations) {
  if (destinations.length === 0) return 0;

  let totalVisitors = 0;

  // Use a for loop to sum up the visitorsPerYear
  for (let i = 0; i < destinations.length; i++) {
    totalVisitors += destinations[i].details.visitorsPerYear;
  }

  return totalVisitors / destinations.length;
}
//ex5
const destination1 = {
  name: "Eiffel Tower",
  details: {
    visitorsPerYear: 7000000,
    entryFee: "25 USD"
  }
};

const destination2 = {
  name: "Great Wall of China",
  details: {
    visitorsPerYear: 10000000,
    entryFee: "60 CNY"
  }
};

const mergedDestination = { ...destination1, ...destination2 };
console.log(mergedDestination);