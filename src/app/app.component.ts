import { Component, OnInit } from '@angular/core';
import { UserData } from './model/user-data';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currencyConverterApp';
userData:UserData[]=[]


  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getData().subscribe((data:any) => {
      console.log(data);
this.userData = data
    });
  }
}
