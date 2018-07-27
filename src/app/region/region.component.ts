import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../services/http.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpService]
})
export class RegionComponent implements OnInit {
  public region: any;
  public data: any;
  public p: number = 1; //for pagination

  constructor(private location: Location, private HttpService: HttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get("region");
    this.HttpService.coutriesByRegion(this.region).subscribe(
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
