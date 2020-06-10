// =========================================================================================
// Class Usage - 
// To display 'Google Maps' in a given 'divId' with zoom and center properties
// To provide an Interface that define how an Object can be an argument to 'addMarker' method
// =========================================================================================

// Instructions to every other class on how they can be an argument to 'addMarker' i.e.
// they must have a field called 'location' with 'lat' and 'lng' properties
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // Declaring an instance of 'Map' class from 'google.maps'
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // ===========================================================================
  // Function to add a Marker on Google Map
  // Note: In order to be an argument to 'addMarker' function, 
  // it must safisfy the 'Mappable' interface i.e. 
  // it must have a 'location' object as defined in the 'Mappable' interface
  // ===========================================================================
  addMarker(mappable: Mappable): void{
    new google.maps.Marker({
      // in order to create a Mrker, we need to provide values for 'map' and 'position'
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
