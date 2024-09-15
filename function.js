let travelDestinations;


function initializeDestination() {
    travelDestinations = [];
}

initializeDestination();

//Q2

function addDestination(destimationName, travelDate){
    let sub_arr = [destimationName,travelDate];
    travelDestinations = [sub_arr];
}
addDestination('paris','24.10.95');
console.log(travelDestinations);

//q3
function findTravelDate(destimationName){
    for(let i=0;i<travelDestinations.length;i++){
        if(travelDestinations[i][0]===destimationName){
            return console.log(travelDestinations[i][1]);
            
        }
    }
    return console.log('not found');
}
findTravelDate('london');


//q4

function updateTravelDate(destimationName,newTravelDate){
    for(let i = 0; i<travelDestinations.length;i++){
        if(destimationName === travelDestinations[i][0])
            travelDestinations[i][1] = newTravelDate;
            return console.log('the travel date updated!');
    }
    return console.log('there is no a destination name like this in the list!');
}

// q5
function removeDestination(destinationName){
    for(let i = 0;i<travelDestinations.length;i++){
        if(destinationName === travelDestinations[i][0]){
            travelDestinations.splice(i, 1);
            return console.log('The deletion was completed successfully');
        }
    }
    return console.log('there is no destination name like this in the array');
}
//q6


//pure

function findNextDestination(ratings) {
    if (!Array.isArray(ratings) || ratings.length === 0) return NaN;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}

function extractOrganizerNames(tripNames) {
    return tripNames.map(tripName => {
        const prefix = "Organized by ";
        const startIndex = tripName.indexOf(prefix);
        
        if (startIndex !== -1) {
            return tripName.substring(startIndex + prefix.length).trim();
        }
        
        return '';
    }).filter(organizer => organizer !== ''); 
}

function containsWordInTitle(title, keyword) {
    return title.includes(keyword);
}

function allTitlesStartWithSameLetter(titles) {
    if (titles.length === 0) return true; 

   
    const firstLetter = titles[0][0].toLowerCase();
    
    return titles.every(title => title[0].toLowerCase() === firstLetter);
}

function concatenateTypes(tripTypes) {
    return tripTypes.join(', ');
}

function anyTitleLongerThanFifteenChars(titles) {
    return titles.some(title => title.length > 15);
}

function findTripsByOrganizer(tripTitles, organizers) {
    const uniqueOrganizers = new Set(organizers);
    return tripTitles.filter((title, index) => uniqueOrganizers.has(organizers[index]));
}

function capitalizeFirstLetter(tripTitles) {
    return tripTitles.map(title => {

        return title.charAt(0).toUpperCase() + title.slice(1);
    });
}