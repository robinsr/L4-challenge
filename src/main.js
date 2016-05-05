/**
 * Entry point of the app
 */

import View from './view';
import fetchData from './service';
import { $on } from './util';

class App {
  init() {
    this.view = new View();
    fetchData()
      .then(data => {
        this.view.render(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const app = new App();

$on(window, 'load', app.init);