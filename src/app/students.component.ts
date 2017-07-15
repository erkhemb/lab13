import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DbService } from './db.service';

@Component({
  selector: 'app-students',
  template: `
    <p>
      Students!
    </p>
    <div>
    <ul>
      <li *ngFor="let item of items"><a href="/profile/{{item.id}}">{{item.name}}</a></li>
    </ul>
    </div>
  `,
  styles: ['ul {float: left}']
})
export class StudentsComponent {

  items: any;

  constructor(private router: Router, private DbService: DbService) {
    this.items = DbService.getData();

    console.log(DbService.getData());
  }

  onNavigate() {
    // Imperative Routing
    this.router.navigate(['/']);
  }

}
