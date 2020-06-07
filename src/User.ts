import faker from 'faker';

// =============================================================================
// Class Usage - To generate random 'name' and random 'location'
// =============================================================================
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // Added 'constructor' that initializes class fields using 'faker'
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };    
  }
}