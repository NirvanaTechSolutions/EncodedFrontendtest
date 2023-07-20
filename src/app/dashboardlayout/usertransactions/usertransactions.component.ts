import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-usertransactions',
  templateUrl: './usertransactions.component.html',
  styleUrls: ['./usertransactions.component.css']
})
export class UsertransactionsComponent {
  paymentdetails:any
  loading:any
  activation:any
  expiration:any
  constructor(private main:MainService)
{
  this.loading = true
  this.getpayment()
}

async getpayment()
{
 await (await this.main.getpayement()).subscribe((response:any)=>{
    this.paymentdetails = response
    for (let index = 0; index < this.paymentdetails.length; index++) {
      this.activation = this.main.transform(this.paymentdetails[index].activation)
      this.expiration = this.main.transform(this.paymentdetails[index].expiration)

    }
    
    this.loading= false
  
  })
  }
}


