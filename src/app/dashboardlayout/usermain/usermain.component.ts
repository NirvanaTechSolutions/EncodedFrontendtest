import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent {
  substatus:any
  loading:any
  constructor(private main:MainService){
    this.checksubscription()
      
  }


  async checksubscription()
  {
    this.loading=true;
    (await this.main.checksubscription()).subscribe((response:any)=>{
      if(response.exists==true)
      {
        this.substatus = true
        this.loading=false
      }
      else
      {
        this.substatus = false
        this.loading=false
      }


    })  

  }

}


