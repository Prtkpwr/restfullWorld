import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, OnDestroy {
  navigationSubscription;
  data;



  public language;
  constructor(private location: Location, private HttpService: HttpService, private _route: ActivatedRoute, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.ngOnInit()
  }

  ngOnInit() {
    this.language = this._route.snapshot.paramMap.get("language");
    this.HttpService.languageFilter(this.language).subscribe(
      data => {
        console.log("data", data)
        this.data = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
  }
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
