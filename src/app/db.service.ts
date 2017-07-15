import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DbService {

  datas: any[];

  constructor() {
    this.datas = [{
      "id": 1,
      "name": "Asaad saad",
      "stuId": "989898",
      "email": "asaad@mum.edu"
    },
    {
      "id": 2,
      "name": "John David",
      "stuId": "989898",
      "email": "asaad@mum.edu"
    },
    {
      "id": 3,
      "name": "Chris Bryan",
      "stuId": "989898",
      "email": "asaad@mum.edu"
    }];
  }

  getData() {
    return JSON.parse(JSON.stringify(this.datas));
  }
}
