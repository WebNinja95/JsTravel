//q1
const getDestinationName = destination => destination.name;

//q2

const getTravelStatus = status => {
    if (status === "Visited") {
      return "You have visited this place";
    } else if (status === "Upcoming") {
      return "You are planning to visit this place";
    } else {
      return "This place is in your wishlist";
    }
  };

  //q3

  const getTotalBudget = destinations => {
    let totalBudget = 0;
    for (let i = 0; i < destinations.length; i++) {
      totalBudget += destinations[i].budget;
    }
    return 'Total travel budget is ' + totalBudget;
  };

  //q4

  let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);

  //q5

  const getDestinationNames = destinations => destinations.map(destination => destination.name);
