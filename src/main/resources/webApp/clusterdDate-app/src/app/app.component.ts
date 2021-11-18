import {Component, OnInit} from '@angular/core';
import {Deals} from './deals/add-deals/Deals';
import {DealsService} from './deals/add-deals/deals-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deals';
  deals: Deals[];

  constructor(private router: Router, private dealsService: DealsService) {
  }

  getDealsDetails() {
    this.dealsService.getDealsDetails().subscribe(data => {
      this.deals = data;
    });
  }

  addDeals(): void {
    this.router.navigate(['add-deals'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getDealsDetails();
    });
  }
}
