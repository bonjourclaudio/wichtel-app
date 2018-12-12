import {Component} from '@angular/core';
import * as firebase from 'firebase';
// @ts-ignore
import {environment} from '../environments/environment';
import {FirebaseProvider} from 'angular-firebase';
import {Group} from './model/Group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config = environment.config;

  searching = false;

  searchValue = '';

  results: any[];

  groups: Group[];

  groupsResult: Group[];

  searchResultMsg;

  constructor(private fb: FirebaseProvider) {

    firebase.initializeApp(this.config);

    this.results = [];
    this.groups = [];
    this.groupsResult = [];

  }

  openSearchDialog() {
    this.groupsResult = [];

    this.searching = true;

    this.fb.getData('group').then((result) => {

      this.results = Object.keys(result).map(key => ({
        type: key,
        value: result[key]
      }));


      for (let i = 0; i < this.results.length; i++) {

        const group = {
          'id': this.results[i].type,
          'members': this.results[i].value.members,
          'name': this.results[i].value.name,
          'priceLimit': this.results[i].value.priceLimit,
          'groups': this.results[i].value.groups
        };


        this.groups.push(group);

      }


    });

  }

  search() {

    this.searchResultMsg = 'no results...';


    this.groupsResult = [];

    for (let i = 0; i < this.groups.length; i++) {

      if (this.groups[i].id === this.searchValue) {

        this.groupsResult.push(this.groups[i]);

        this.searchResultMsg = 'Search results:';

      } else if (this.groups[i].name === this.searchValue) {

        this.groupsResult.push(this.groups[i]);

        this.searchResultMsg = 'Search results:';

      }

    }
  }

}
