import { getPosition } from './util';

/**
 * Handles calling the darksky api
 * @returns {Promise}
 */
const fetchData = () => {
  return new Promise((resolve, reject) => {
    getPosition()
      .then(coords => {
        const {lat, lng} = coords;
        fetch(`/api/${lat},${lng}`)
          .then(req => {
            req.json()
            .then(data => resolve({ days: data.daily.data.slice(0,6) }))
            .catch(() => reject('Could not parse response data'));
          })
          .catch(() => reject('Could not fetch data'));
      })
      .catch(reject);
  });
}

export default fetchData;