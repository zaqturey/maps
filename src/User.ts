import faker from 'faker';
import { Mappable } from './CustomMap';

// =========================================================================================
// Class Usage - To generate random 'name' and random 'location'
// => (optional, but very useful) as class 'implements' the 'Mappable'interface
// => therefore it must implement all fields/methods in 'Mappable'
// =========================================================================================
export class User implements Mappable {
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

  // ===========================================================================
  // Implementing 'markerContent()' as its defined in 'Mappable' interface
  // ===========================================================================
  markerContent(): string {
    return `UserName: ${this.name}`;
  }
}
