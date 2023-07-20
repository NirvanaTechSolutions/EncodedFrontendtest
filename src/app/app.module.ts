import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

import {MainService} from './services/main.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { PricingComponent } from './pricing/pricing.component';
import { SectionsComponent } from './homelayout/sections/sections.component';
import { MainComponent } from './homelayout/main/main.component';
import { NavbarComponent } from './homelayout/navbar/navbar.component';

import { LackingComponent } from './homelayout/lacking/lacking.component';
import { JoinusComponent } from './homelayout/joinus/joinus.component';
import { CardsComponent } from './homelayout/cards/cards.component';
import { FooterComponent } from './homelayout/footer/footer.component';
import { VerifyemailComponent } from './middlewares/verifyemail/verifyemail.component';
import { CompleteprofileComponent } from './middlewares/completeprofile/completeprofile.component';
import { UsernavComponent } from './dashboardlayout/usernav/usernav.component';
import { UsermainComponent } from './dashboardlayout/usermain/usermain.component';

import { CardloadingComponent } from './dashboardlayout/usercontent/cardloading/cardloading.component';
import { AboutusComponent } from './helppages/aboutus/aboutus.component';
import { ContactusComponent } from './helppages/contactus/contactus.component';
import { PrivacypolicyComponent } from './helppages/privacypolicy/privacypolicy.component';
import { TermsComponent } from './helppages/terms/terms.component';
import { RefundComponent } from './helppages/refund/refund.component';
import { VideoComponent } from './homelayout/video/video.component';
import { UsertransactionsComponent } from './dashboardlayout/usertransactions/usertransactions.component';
import { UserprofileComponent } from './dashboardlayout/userprofile/userprofile.component';
import { UserdataComponent } from './dashboardlayout/usercontent/userdata/userdata.component';
import { WritereviewComponent } from './homelayout/writereview/writereview.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowreviewsComponent } from './homelayout/showreviews/showreviews.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeloadingComponent } from './homeloading/homeloading.component';










@NgModule({
  declarations: [
    AppComponent,
    

   
  
 
   
             LoadingComponent,
             PricingComponent,
        
             MainComponent,
             NavbarComponent,
             SectionsComponent,
         
             LackingComponent,
                        JoinusComponent,
                        CardsComponent,
                        FooterComponent,
                        VerifyemailComponent,
                        CompleteprofileComponent,
                        UsernavComponent,
                        UsermainComponent,
                      
                       
                        CardloadingComponent,
                        AboutusComponent,
                        ContactusComponent,
                        PrivacypolicyComponent,
                        TermsComponent,
                        RefundComponent,
                        VideoComponent,
                        UsertransactionsComponent,
                        UserprofileComponent,
                        UserdataComponent,
                        WritereviewComponent,
                        ShowreviewsComponent,
                        ErrorpageComponent,
                        HomeloadingComponent,
                    
                      
                       
                    
             
             
             
             
               

     

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
    RouterModule.forRoot([{path: '**',pathMatch: 'full', component: ErrorpageComponent},
  
  ]), 
    CarouselModule,
    ReactiveFormsModule,
    
   

    
    AuthModule.forRoot({
      domain: 'dev-itoeosdt8oc3bfhx.us.auth0.com',
      clientId: 'rjJg9KPsvm8On9DVRNsJ1PiagN2AZ74N',

      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
