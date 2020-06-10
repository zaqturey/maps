// =========================================================================================
// Class Usage - 
// To display 'Google Maps' in a given 'divId' with zoom and center properties
// To provide an Interface that define how an Object can be an argument to 'addMarker' method
// =========================================================================================

// interface defines Instructions to every other class on how they can be an argument to 'addMarker' i.e.
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
  // it must safisfy the 'Mappable' interface
  // ===========================================================================
  addMarker(mappable: Mappable): void{
     const marker = new google.maps.Marker({
      // in order to create a Mrker, we need to provide values for 'map' and 'position'
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    // 
    // =========================================================================
    // addLister -> Calling 'addLister' on 'marker' to display an 'InfoWindow'
    // addLister requires two arguments i.e. 'eventName' and 'handler'
    // =========================================================================
    marker.addListener('click', () => {
      // Creating an object of 'infoWindow'
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi Vibhakar!'
      });

      // =======================================================================
      // Calling 'open' method on 'infoWindow' to show the Pop-Up window.
      // 'open' requires two arguments i.e. 'map' and an 'anchor' e.g. Marker class
      // =======================================================================
      infoWindow.open(this.googleMap, marker);
    });
  }
}
