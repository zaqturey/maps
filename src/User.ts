import faker from 'faker';

// =============================================================================
// Class Usage - To generate random 'name' and random 'location'
// =============================================================================
class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}