import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { PricingComponent } from './pricing/pricing.component';
import { MainComponent } from './homelayout/main/main.component';
import { VerifyemailComponent } from './middlewares/verifyemail/verifyemail.component';
import { CompleteprofileComponent } from './middlewares/completeprofile/completeprofile.component';
import { UsermainComponent } from './dashboardlayout/usermain/usermain.component';
import { AboutusComponent } from './helppages/aboutus/aboutus.component';
import { ContactusComponent } from './helppages/contactus/contactus.component';
import { PrivacypolicyComponent } from './helppages/privacypolicy/privacypolicy.component';
import { TermsComponent } from './helppages/terms/terms.component';
import { RefundComponent } from './helppages/refund/refund.component';
import { UsertransactionsComponent } from './dashboardlayout/usertransactions/usertransactions.component';
import { UserprofileComponent } from './dashboardlayout/userprofile/userprofile.component';
import { ShowreviewsComponent } from './homelayout/showreviews/showreviews.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';








const routes: Routes = [
  {
    component:UsermainComponent,
    path:'Dashboard',

  },



  {
    component:AppComponent,
    path:''
  },
  {
    component:MainComponent,
    path:'home'
  },
  {
    component:PricingComponent,
    path:'pricing'
  },
    
  {
    component : VerifyemailComponent,
    path:'VerifyEmail'
  },
  {
    component : CompleteprofileComponent,
    path:'CompleteProfile'
  },
    
  {
    component : AboutusComponent,
    path:'aboutus'
  },

  {
    component : ContactusComponent,
    path:'contactus'
  },

  {
    component : PrivacypolicyComponent,
    path:'privacypolicy'
  },

  {
    component : TermsComponent,
    path:'termsandconditions'
  },

  {
    component : RefundComponent,
    path:'refundpolicies'
  },
  {
    component:UserprofileComponent,
    path:'profile'
  },
  {
    component:UsertransactionsComponent,
    path:'alltransactions'
  },
  {
    component:ShowreviewsComponent,
    path:'our-reviews'
  },



  { path: '**', component: ErrorpageComponent },





  
    



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
