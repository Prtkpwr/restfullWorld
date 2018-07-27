import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  public data: any;

  constructor(private HttpService: HttpService) { }

  ngOnInit() {
  }

  public getCountiresByRegions: any = (region) => {
    this.HttpService.coutriesByRegion(region).subscribe(
      data => {
        console.log("Data Collected", data)
        this.data = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      })
  }
}
