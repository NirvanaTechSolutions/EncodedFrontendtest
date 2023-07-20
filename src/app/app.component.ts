import { Component} from '@angular/core';
import { MainService } from './services/main.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EncodedBit-Lectures';
  showindicator  = true;
  loading:any;
  constructor(public main: MainService) {
    this.loading = true
    
    this.main.checkauthentication()

    this.loading=false
    

  }

  

 

 
 

  
}
