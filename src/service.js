
/**
 * Handles calling the darksky api
 */
export default class Service {
  constructor(key) {
    this.key = key;
  } 
  
  fetchData() {
    return new Promise((resolve, reject) => {
      this.getPosition()
        .then(coords => {
          const {lat, lng} = coords;
          //fetch(`/api/${lat},${lng}`)
          fetch('mock-data.json')
            .then(req => {
              req.json()
              .then(data => resolve(data.daily.data))
              .catch(() => reject('Could not parse response data'));
            })
            .catch(() => reject('Could not fetch data'));
        })
        .catch(reject);
      });
  }

  getPosition() {
    const defaultPosition = {
      lat: 47.6062,
      lng: -122.3321
    };

    return new Promise((resolve, reject) => {
      if (window.navigator.geolocation) {
        const geoSuccess = data => {
          return resolve({
            lat: data.coords.latitude,
            lng: data.coords.longitude
          });
        };
        
        const geoError = () => {
          return reject('There was a problem getting your lat/lng');
        };

        window.navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
      } else {
        return resovle(defaultPosition);
      }
    });
  }
}