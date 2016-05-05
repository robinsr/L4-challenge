import table from './template';
import { qs, qsa, $delegate } from './util';

NodeList.prototype.forEach = Array.prototype.forEach;

export default class View {
  constructor() {
    this.el = qs('#app-root');
    this.delegateEvents();
  }

  delegateEvents() {
    $delegate(this.el, '.summary-row td', 'click', e => {
      this.closeAllDetailSections();
      e.target.parentElement.nextElementSibling.removeAttribute('hidden')
    });
  }

  closeAllDetailSections() {
    qsa('.details-row').forEach(elem => elem.setAttribute('hidden', 'hidden'));
  }

  render(data) {
    this.el.innerHTML = table(data);
  }
}