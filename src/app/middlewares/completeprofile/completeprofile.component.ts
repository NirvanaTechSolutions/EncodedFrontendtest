import { Component,OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MainService } from 'src/app/services/main.service';
import * as intlTelInput from 'intl-tel-input';






@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.component.html',
  styleUrls: ['./completeprofile.component.css']
})
export class CompleteprofileComponent implements OnInit {
  @ViewChild('phoneNumberInput', { static: true }) phoneNumberInput!: ElementRef<HTMLInputElement>;


  formData = {
    
    country: '',
    state: '',
    message: '',
    mobileno :'',
    pincode:''
  };
profinfo:any
  exist :any;

profileCompleted:boolean = false;
userProfile: any;
  constructor(private main:MainService,public auth: AuthService,private router:Router)
  {
   
  }
  ngOnInit() {
    const inputElement = this.phoneNumberInput.nativeElement;
    intlTelInput(inputElement, {
      initialCountry: 'in',
      separateDialCode: true,
    });

    console.log(inputElement)
  
  }

  countries = ['India', 'United States', 'Germany','Europe'];
  states: string[] = [];

  onCountryChange() {
    const selectedCountry = this.formData.country;
    // Update the states array based on the selected country
    if (selectedCountry === 'India') {
      this.states = [ "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttarakhand",
      "Uttar Pradesh",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Lakshadweep",
      "Puducherry"];
    } else if (selectedCountry === 'United States') {
      this.states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    } else if (selectedCountry === 'Germany') {
      this.states = ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"];
    } 
    else if (selectedCountry === 'Europe') {
      this.states = [ 'Austria',
      'Belgium',
      'Bulgaria',
      'Cyprus',
      'Czech Republic',
      'Germany',
      'Denmark',
      'Estonia',
      'Spain',
      'Finland',
      'France',
      'United Kingdom',
      'Greece',
      'Hungary',
      'Croatia',
      'Ireland, Republic of (EIRE)',
      'Italy',
      'Lithuania',
      'Luxembourg',
      'Latvia',
      'Malta',
      'Netherlands',
      'Poland',
      'Portugal',
      'Romania',
      'Sweden',
      'Slovenia',
      'Slovakia'];
    }else {
      this.states = [];
    }
  }

 loading: boolean = false;
async  onSubmit() {
  this.loading = true;
  const phoneNumberInput = this.phoneNumberInput.nativeElement;
  const iti = (window as any).intlTelInputGlobals.getInstance(phoneNumberInput);
  const selectedCountryData = iti.getSelectedCountryData();
  const selectedCountryCode = selectedCountryData.dialCode;
  
  const mobileNumber = this.formData.mobileno;
  
  
  const mergedString = '+'+selectedCountryCode+mobileNumber;

  
  this.formData.mobileno = mergedString;


  
  
    // Retrieved the form data
       await this.main.sendData(this.formData).then(()=>{
        this.router.navigate([''])
        this.loading=false

       })
        // Handle the successful form submission
       
     
        
    
      .catch((error:any) => {
        // Handle any errors during form submission
        console.error(error);
     
      });
   
  }

}
