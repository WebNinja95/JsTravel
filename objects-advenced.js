
//ex1 + 2
const TravelPlanner = {
    locations: [],
  
    addLocation(name, info) {
      const existingLocation = this.locations.find(location => location.name === name);
  
      if (existingLocation) {
        console.error(`Error: Location with the name "${name}" already exists.`);
        return;
      }
      this.locations.push({
        name,
        ...info
      });
  
      console.log(`Location "${name}" added successfully.`);
    },
    removeLocation(name){
        const existingLocation = this.locations.find(location => location.name === name);
        if(!existingLocation){
            console.error(`Error: Location with the name "${name}" doesnt exists.`);
            return;
        }
        
    }
  };