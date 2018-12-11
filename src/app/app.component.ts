import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config = environment.config;

  constructor() {

    firebase.initializeApp(this.config);

  }
}
