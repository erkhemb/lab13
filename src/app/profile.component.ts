import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from './db.service';

@Component({
  selector: 'profile',
  template: `
    <p>
      Route Parameter!  ID: {{id}}<br/>
      Student name: {{item?.name}}<br/>
      Student stuId: {{item?.stuId}}<br/>
      Student email: {{item?.email}}<br/>
    </p>
  `
})
export class ProfileComponent {
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: number;

  items: any;
  item: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private DbService: DbService) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );

    this.items = DbService.getData();
    this.item = this.items[this.id - 1];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
