import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import {FirebaseProvider} from 'angular-firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  @ViewChild('wizard') wizard: ClrWizard;

  open = false;

  model = {
    name: '',
    priceLimit: '',
    members: [],
    groups: []
  };


  members = [];

  memberName: string;

  showSuccessModal = false;

  groupId: any;

  groupCreated = false;

  showError = false;

  constructor(private fb: FirebaseProvider,
              private router: Router) {
  }

  ngOnInit() {
  }

  addMember() {

    this.memberName.replace(/ /g, '');

    if (this.memberName !== null || this.memberName !== '') {
      this.members.push(this.memberName);
      this.model.members.push(this.memberName);
    }

    this.memberName = '';
  }

  removeMember(index: number) {
    this.members.splice(index, 1);
    this.model.members.splice(index, 1);
  }

  createWichtelgruppe() {

    if (this.members.length % 2 === 0) {

      while (this.members.length) {
        this.model.groups.push(this.members.splice(0, 2));
      }

      this.fb.pushData('group', this.model).then((result) => {

        this.groupId = result;
        this.groupCreated = true;


      }).then(() => {
        this.showSuccessModal = true;

        setTimeout(() => {
          this.router.navigate(['/wichteln/' + this.groupId]);
        }, 3000);

      }).catch(err => {
        console.log(err);
      });

    } else {

      this.showError = true;

      setTimeout(() => {
        this.showError = false;
      }, 3000);

    }
  }

  finish() {
    window.location.reload();
  }

}
