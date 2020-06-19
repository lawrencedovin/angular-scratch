import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  drinks: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getDrinks().subscribe(data => {
      this.drinks = data
      console.log(this.drinks);
    }
  );
  }

}
