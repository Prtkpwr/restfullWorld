import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers: [HttpService]
})
export class SingleCountryComponent implements OnInit {
  public country: any;
  public data: any;
  constructor(private location: Location, private HttpService: HttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.country = this._route.snapshot.paramMap.get("country");
    this.HttpService.singleCountry(this.country).subscribe(
      data => {
        console.log("Data Collected", data)
        this.data = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      })
  }

  public cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
