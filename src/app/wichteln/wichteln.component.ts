import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseProvider} from 'angular-firebase';
import {Group} from '../model/Group';
import {forEach} from '@angular/router/src/utils/collection';
import {timeout} from 'q';

@Component({
  selector: 'app-wichteln',
  templateUrl: './wichteln.component.html',
  styleUrls: ['./wichteln.component.scss']
})
export class WichtelnComponent implements OnInit {

  groupId;

  groupLink;

  groups: any[];

  group: Group;

  loading = true;

  copy = false;

  showPartner = false;

  partner: string;

  constructor(private route: ActivatedRoute,
              private fb: FirebaseProvider,
              private router: Router) {
  }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');

    this.groupLink = window.location;

    this.getGroup();
  }

  getGroup() {
    this.fb.getData('group').then((result) => {

      this.groups = Object.keys(result).map(key => ({
        type: key,
        value: result[key]
      }));

      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].type === this.groupId) {
          this.group = this.groups[i].value;
          this.loading = false;
        }
      }
    });
  }

  copyLink() {
    this.copy = true;

    setTimeout(() => {
      this.copy = false;
    }, 2000);

  }

  showGroup(memberName: string) {

    for (let i = 0; i < this.group.groups.length; i++) {

      if (this.group.groups[i].includes(memberName)) {

        this.partner = this.group.groups[i].toString().replace(memberName, '').replace(',', '');

        this.showPartner = true;

      }

    }
  }

}
