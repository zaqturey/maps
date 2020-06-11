import faker from 'faker';
import { Mappable } from './CustomMap';

// =========================================================================================
// Class Usage - To generate random 'companyName', a 'catchPhrase' and a random 'location'
// => (optional, but very useful) as class 'implements' the 'Mappable'interface
// => therefore it must implement all fields/methods in 'Mappable'
// =========================================================================================
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  // ===========================================================================
  // Implementing 'markerContent()' as its defined in 'Mappable' interface
  // You can also retrun an HTML element as a String using backticks
  // ===========================================================================
  markerContent(): string {
    return `
      <div>
        <h3>Conmany Name: ${this.companyName}</h1>
        <h5>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `  
  }
}
