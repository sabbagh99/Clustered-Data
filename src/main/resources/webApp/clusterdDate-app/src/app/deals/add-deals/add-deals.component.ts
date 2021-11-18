import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DealsService} from "./deals-service.service";

@Component({
  selector: 'app-add-deals',
  templateUrl: './add-deals.component.html',
  styleUrls: ['./add-deals.component.css']
})
export class AddDealsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dealsService: DealsService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      fromCurrency: ['', Validators.required],
      toCurrency: ['', Validators.required],
            dealAmount: ['', Validators.required]

    });

  }

  onSubmit() {
    this.dealsService.addDeals(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-deals']);
      });
  }

}
