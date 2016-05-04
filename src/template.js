/**
* template functions (es6 template strings)
*/

import moment from 'moment';

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

const day = data => html`
`;

const render = data => html`
  <p>Todays weather:</p>

  ${data.days.forEach(day => html`
    I am a day
  `)}
`;

export default render;