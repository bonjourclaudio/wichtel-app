import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  page;

  constructor(private route: ActivatedRoute) {

    this.route.url.subscribe(result => {

      this.page = (result.toString());

    });

  }

  ngOnInit() {
  }

}
