/**
 * Entry point of the app
 */

import View from './view';
import Service from './service';
import { $on } from './util';

class App {
  constructor() {
    this.service = new Service();
    this.view = new View();
  }

  init = () => {
    this.service.fetchData()
      .then(data => {
        this.view.render(data);
        console.log(data)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const app = new App();

$on(window, 'load', app.init);