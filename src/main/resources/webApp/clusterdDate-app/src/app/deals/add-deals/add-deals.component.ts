import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DealsService } from "./deals-service.service";

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

  currencyList: country[] = [
    new country("1", "USD"),
    new country('2', 'JOD'),
    new country('3', 'GBP'),
    new country('4', 'AUD'),
    new country('5', 'CAD'),
    new country('6', 'CGD'),
    new country('7', 'INR'),
    new country('8', 'CHF'),
    new country('9', 'JPY'),
    new country('10', 'CNY'),
    new country('11', 'EUR')
  ];



  onSubmit() {
    
    if (this.addForm.value.fromCurrency === '' || this.addForm.value.toCurrency === '' || this.addForm.value.dealAmount === '') {
      alert("All fields are requierd");

    } else {

      this.dealsService.addDeals(this.addForm.value)
      .subscribe(data => {
        if("CREATED"==data){
                alert(" Deal add Successfully");

          this.router.navigate(['list-deals']);
        }else{

          alert("Deal alrady exists");

        }
      });
    }


  }

  

}
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}