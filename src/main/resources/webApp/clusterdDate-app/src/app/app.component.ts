import { Component, OnInit } from '@angular/core';
import { Deals } from './deals/add-deals/Deals';
import { DealsService } from './deals/add-deals/deals-service.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deals';
  deals: Deals[];
  deal: Deals;
  isOneDeal: any;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dealsService: DealsService) {
    this.router.navigate(['add-deals'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  }


  getDealsDetails() {
    this.dealsService.getDealsDetails().subscribe(data => {
      this.isOneDeal = false;
      this.deals = data;

    });
  }

  getOneDealDetail(id) {
    this.dealsService.getOneDealDetail(id).subscribe(data => {
      this.isOneDeal = true;
      this.deal = data;
      this.deals = null;
    });
  }


  onSubmit() {
    if(this.addForm.value.id != ''){
    this.getOneDealDetail(this.addForm.value.id);
  }
  }
  
  ngOnInit(): void {
    
      this.addForm = this.formBuilder.group({
        id: ['', Validators.required]
      });
      this.router.events.subscribe(value => {

        this.getDealsDetails();
      });
  
  }
}
