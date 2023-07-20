import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {
constructor(private main:MainService){}
async logoutuser()
{
 localStorage.clear()
 await this.main.logout();
 
}
}
