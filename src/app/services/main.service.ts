import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';




function _window(): any {

  // return the global native browser window object

  return window;

}
@Injectable({
  providedIn: 'root'
})

export class MainService {

  


  



  get nativeWindow() : any{
    return _window();

  }

  constructor(private auth: AuthService,private router:Router,private http:HttpClient) {
   



    
  }

//login service implementation
async login() : Promise<any>{
    return new Promise((resolve,reject)=>{
      this.auth.loginWithRedirect().subscribe({
        next: (loginWithPopup) => {
          
        },
        error: (msg) => {
         
          reject(msg)
        }
      })
    })
}
//logout service implementation
async logout() : Promise<any>{
  return new Promise((resolve,reject)=>{
    this.auth.logout().subscribe({
      next: (logout) => {
        
      },
      error: (msg) => {
       
        reject(msg)
      }
    })
  })
}
//check authentication of user
isAuthenticated = false
profilestatus:any
async checkauthentication()  
{
  await this.auth.isAuthenticated$.subscribe({
    next:  async (isAuthenticated) => {

      
      this.isAuthenticated = isAuthenticated
      if(this.isAuthenticated == true)
      {
        localStorage.setItem('authentication',"true")
       await this.auth.user$.subscribe({
          next: async (user) =>{
            if(user?.email_verified == true)
            {
             await (await this.checkid()).subscribe( (response:any)=>{
              if(response.exists === true){
                this.router.navigateByUrl('Dashboard')
              }
              else{
                this.router.navigateByUrl('CompleteProfile')
              }
              })
            }
          
  
            else{
              this.router.navigateByUrl('VerifyEmail')
           
            }

           
          }
        })
      }
      else{
        localStorage.setItem('authentication',"false")
        this.router.navigateByUrl('home')
      }
    },
    error: (msg) => {
      console.log(msg)
    }
  })
}

///all about the database communication

//generate a unique JWT token

gettoken(): Promise<string | undefined> {
  return new Promise<string | undefined>((resolve) => {
    this.auth.idTokenClaims$.subscribe((claim) => {
      resolve(claim?.__raw);
    });
  });
}


async sendData(data: any): Promise<any> {
  const accessToken = await this.gettoken();
  return new Promise(async (resolve, reject) => {
    try {
    
      const headers = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });

      this.http.post('http://localhost:1220/auth/register', data, { headers }).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          reject(error);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

async getDataById() : Promise<any>  {
  

  return new Promise(async (resolve, reject) => {
    const acesstoken = await this.gettoken()

    const headers = new HttpHeaders({
      Authorization: `Bearer ${acesstoken}`,
    });
     this.http.get(`http://localhost:1220/auth/showuser`,{headers}).subscribe((response)=>{
      resolve(response)
     }
     )
      
  });
}



async checkid()
{
  const acesstoken = await this.gettoken()

  

  const headers = new HttpHeaders({
    Authorization: `Bearer ${acesstoken}`,
  });



 return this.http.get(`http://localhost:1220/auth/check`,{headers})
}

//checksubscription
async checksubscription()
{
  const acesstoken = await this.gettoken()

  

  const headers = new HttpHeaders({
    Authorization: `Bearer ${acesstoken}`,
  });



 return this.http.get(`http://localhost:1220/auth/checksubscription`,{headers})
}

/// all about the local storage 





async fetchapi() : Promise<any>
{
  
  return this.getDataById().then((response)=>{
    const cachtostore = [['email', response?.email], ['name', response?.name],['country', response?.country],['state', response?.state],['message', response?.message],['mobileno', response?.mobileno],['pincode', response?.pincode],['issubscribed', response?.issubscribed],['isprofile',response?.isprofile]];
    
    
    console.log("profile saved to cache")
    return response
    

  })
}

getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();

  return `${year}-${month}-${day}`;
}

 getExpirationDate() {
  const currentDate = new Date();
  const expirationDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
  const day = expirationDate.getDate().toString().padStart(2, '0');
  const month = (expirationDate.getMonth() + 1).toString().padStart(2, '0');
  const year = expirationDate.getFullYear().toString();

  return `${year}-${month}-${day}`;
}








async getbatch() 
{
  
  const acesstoken = await this.gettoken()

  

  const headers = new HttpHeaders({
    Authorization: `Bearer ${acesstoken}`,
  });



 return this.http.get(`http://localhost:1220/b/getbatch`,{headers})
}


async getpayement() 
{
  
  const acesstoken = await this.gettoken()

  

  const headers = new HttpHeaders({
    Authorization: `Bearer ${acesstoken}`,
  });



 return this.http.get(`http://localhost:1220/payment/getpayment`,{headers})
}


transform(value: string): string {
  const date = new Date(value);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}









}
