import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  @Output()
  tellMe: EventEmitter<String> = new EventEmitter<String>();
  data: any;
  tempCurrencies: any = [];
  uniqueCurrency: any = [];
  tempLanguages: any = [];
  uniqueLanguages: any = [];
  selectedLanguage;
  constructor(private _http: HttpService, private location: Location, public router: Router) { }

  ngOnInit() {
    this._http.allCountries().subscribe(
      data => {
        this.data = data;
        data.forEach(x => {
          for (let y of x.currencies) {
            if (y.code) {
              this.tempCurrencies.push(y.code)
              this.uniqueCurrency = this.removeDuplicates(this.tempCurrencies)
            }
          }
          for (let z of x.languages) {
            if (z.iso639_2) {
              this.tempLanguages.push(z.iso639_2)
              this.uniqueLanguages = this.removeDuplicates(this.tempLanguages)
            }
          }
        });
      }
    )
  }

  public navigateTo(value) {
    if (value) {
      this.router.navigate(['language/', value]);
    } else if (!value) {
      this.router.navigate(['/home']);
    }
    return false;
  }
  public navigateTo1(value) {
    if (value) {
      this.router.navigate(['currency/', value]);
    } else if (!value) {
      this.router.navigate(['/home']);
    }
    return false;
  }
  public cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  public removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) == -1) {
        unique_array.push(arr[i])
      }
    }
    return unique_array
  }
}
