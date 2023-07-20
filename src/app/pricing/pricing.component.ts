
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MainService } from '../services/main.service';
import { Router,ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
  
})
export class PricingComponent {
  country_code:any
  loading:any
  authentication:any
  constructor(private http:HttpClient,private auth:AuthService,private main:MainService,private router:Router,private route:ActivatedRoute)
  {
    this.loading =true

    this.authentication = localStorage.getItem('authentication')


    this.getLocation()

  }
profileCompleted:any
 




  getLocation(): void {
    
    this.http.get<any>('https://api.ipbase.com/v1/json/')
      .subscribe(
        (response: any) => {
         
          this.country_code = response.country_code;

          localStorage.setItem('country_code',this.country_code)
          this.loading = false
         
        },
        (error) => {
        console.log(error)
        }
      );
  }
  signup()
  {
    this.auth.loginWithRedirect({ 
      authorizationParams: {
          screen_hint: 'signup',
        }});
      }


    async  makePayment(amount:any,plan:any) {
      const acesstoken = await this.main.gettoken()

      const headers = new HttpHeaders({
        Authorization: `Bearer ${acesstoken}`,
      });


        // Create an order on the server
        this.http.post<any>('http://localhost:1220/payment/createOrder', { amount: amount })
          .subscribe(response => {
            const options: any = {
              key: 'rzp_test_YfSCBBlKc69vXF',
              amount: response.amount,
              name: 'Encoded Bits',
              description: 'Payment',
              order_id: response.id,
              callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
              
              handler: (response :any) => {
                const paymentData = {
                  response: response,
                  amount: amount,
                  activation: this.main.getCurrentDate(),
                  expiration: this.main.getExpirationDate(),
                  plan:plan
                 

                };

              
                
                // Handle the success response from Razorpay
                this.loading =true
                this.http.post<any>('http://localhost:1220/payment/paymentSuccess', paymentData,{headers})
                  .subscribe(data => {
                   
                    
                  });
              },
              theme: {
                color: '#F37244'
              }
            };
    
            const rzp = new this.main.nativeWindow.Razorpay(options);
            rzp.open();
          });
      }
      
      async  makePaymentUSD(amount:any,plan:any) {
        const acesstoken = await this.main.gettoken()
  
        const headers = new HttpHeaders({
          Authorization: `Bearer ${acesstoken}`,
        });
  
  
          // Create an order on the server
          this.http.post<any>('http://localhost:1220/payment/createOrderUSD', { amount: amount })
            .subscribe(response => {
              const options: any = {
                key: 'rzp_test_YfSCBBlKc69vXF',
                amount: response.amount,
                name: 'Encoded Bits',
                description: 'Payment',
                order_id: response.id,
                callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
                
                handler: (response :any) => {
                  const paymentData = {
                    response: response,
                    amount: amount,
                    activation: this.main.getCurrentDate(),
                    expiration: this.main.getExpirationDate(),
                    plan:plan
                   
  
                  };
  
                
                  
                  // Handle the success response from Razorpay
                  this.loading =true
                  this.http.post<any>('http://localhost:1220/payment/paymentSuccess', paymentData,{headers})
                    .subscribe(data => {
                      this.router.navigate([''])
                      
                      
                    });
                },
                theme: {
                  color: '#F37244'
                }
              };
      
              const rzp = new this.main.nativeWindow.Razorpay(options);
              rzp.open();
            });
        }
      
  

  }


