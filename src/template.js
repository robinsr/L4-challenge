/**
* template functions (es6 template strings)
*/

import moment from 'moment';
import { closestInt } from './util';

const html = (lits, ...cooked) => {
  let raw = lits.raw;
  let result = '';

  cooked.forEach((subst, i) => {
    let lit = raw[i];
    if (Array.isArray(subst)) {
      subst = subst.join('');
    }
    result += lit;
    result += subst;
  });

  result += raw[raw.length-1]; // (A)
  return result;
};

const summaryIconMap = {
  'clear-day': 'wi-day-sunny',
  'clear-night': 'wi-night-clear',
  'rain': 'wi-rain',
  'snow': 'wi-snow',
  'sleet': 'wi-sleet',
  'wind': 'wi-windy',
  'fog': 'wi-fog',
  'cloudy': 'wi-cloud',
  'partly-cloudy-day': 'wi-day-cloudy',
  'partly-cloudy-night': 'wi-night-partly-cloudy'
}

const windDegrees = [0, 23, 45, 68, 90, 113, 135, 158, 180, 
                    203, 225, 248, 270, 293, 313, 336];

const percent = (val) => Math.floor(val * 100) + '%';

const detailsRow = data => html`
  <td colspan="4">
    <ul>
      <li>
        <i class="wi wi-sunrise"></i> ${moment.unix(data.sunriseTime).format('h:mm a')}
      </li>
      <li>
        <i class="wi wi-sunset"></i> ${moment.unix(data.sunsetTime).format('h:mm a')}
      </li>
      <li>
        <i class="wi wi-humidity"></i> ${percent(data.humidity)}
      </li>
      <li>
        <i class="wi wi-raindrops"></i> ${percent(data.precipProbability)}
      </li>
      <li>
        <i class="wi wi-strong-wind"></i>
        <i class="wi wi-wind towards-${closestInt(windDegrees, data.windBearing)}-deg"></i>
        ${data.windSpeed} mph
      </li>
    </ul>
  </td>  
`;

const summaryRow = data => html`
  <td>${moment.unix(data.time).format('dddd, MMMM Do')}</td>
  <td>
    <i class="wi ${summaryIconMap[data.icon]}"></i>
    ${data.summary}
    </td>
  <td>${Math.round(data.temperatureMax)}<i class="wi wi-fahrenheit"></i></td>
  <td>${Math.round(data.temperatureMin)}<i class="wi wi-fahrenheit"></i></td>
`;

const day = data => html`
  <tr class="summary-row">
    ${summaryRow(data)}
  </tr>
  <tr class="details-row" hidden>
    ${detailsRow(data)}
  </tr>
`;

const render = data => html`
  <h1>This week's weather:</h1>
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Conditions</th>
        <th>High</th>
        <th>Low</th>
      </tr>
    </thead>
    <tbody>
      ${data.days.map(day)}
    </tbody>
  </table>
`;

export default render;