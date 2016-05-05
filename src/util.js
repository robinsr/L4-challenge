/**
 * returns a node using document.querySelector
 * @param  {string} selector - Selector to search scope for
 * @param  {node}   scope    - Node to scope the search to
 * @return {node}          
 */
const qs = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

/**
 * returns a node list using document.querySelectorAll
 * @param  {string} selector  - Selector to search scope for
 * @param  {node}   scope     - Node to scope the search to
 * @return {nodeList}          
 */
const qsa = (selector, scope) => {
  return (scope || document).querySelectorAll(selector);
};

/**
 * Attaches a function handler to event
 * @param  {Object}   target  - Object that will emit event
 * @param  {String}   event   - Event name
 * @param  {Function} handler - Handler function
 */
const $on = (target, event, handler) => {
  target.addEventListener(event, handler);
};

/**
 * Attaches a function handler to event using event bubbling 
 * @param  {node}     target   - Target element to which to attach
 * @param  {string}   selector - Selector string to match events to
 * @param  {String}   type     - Event name
 * @param  {Function} handler  - HHandler function
 */
const $delegate = (target, selector, type, handler) => {
  function dispatchEvent(event) {
    var targetElement = event.target;
    var potentialElements = qsa(selector, target);
    var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

    if (hasMatch) {
      handler.call(targetElement, event);
    }
  }

  $on(target, type, dispatchEvent);
};

/**
 * Uses geolocation api to get latlng
 * @return {Promise} object containing keys 'lat' & 'lng' with numbers as values
 */
const getPosition = () => {
  const defaultPosition = {
    lat: 47.6062,
    lng: -122.3321
  };
  
  const geo = window.navigator.geolocation;

  if (!geo) {
    return Promise.resolve(defaultPosition);
  }
  
  return new Promise((resolve, reject) => {
    geo.getCurrentPosition(data => {
      return resolve({
        lat: data.coords.latitude,
        lng: data.coords.longitude
      });
    }, reject);
  });
};

/**
 * For a given int, find the int in an array that is closest
 * @param  {Number} opts - array of int's
 * @param  {Number} goal - int to get close to
 * @return {Number} 
 */
const closestInt = (opts, goal) => {
  return opts.reduce((prev, curr) => {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  });
};

export { qs, qsa, $on, $delegate, getPosition, closestInt }