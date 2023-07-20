import { Component,HostListener, OnDestroy, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { io, Socket } from 'socket.io-client';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit,OnDestroy {
  
  loading:any
  userProfile:any
  planstatus:any
  plan:any
  news:any
  schedule:any
  date:any
  msg:any
  link:any
  connectionStatus: any;
  socket: any;

  activation:any
  expiration:any
  member:any;
  batch:any
  
  constructor(private main:MainService){
  
    this.LoadData()
    this.Loadmember()
    
  
  }
  
  ngOnInit() {
    this.loading=true
    this.socket = io('http://localhost:1220'); // Replace with your backend server URL

    this.socket.on('connect', () => {
      console.log('Socket.IO connection established.');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket.IO connection disconnected.');
    });

    this.socket.on('batchUpdated', (updatedBatch:any) => {
      // Update the latest news
      this.news =  updatedBatch.news[0]
      this.batch  = updatedBatch.batchId
      this.msg = "Next Class Schedule"
      this.schedule  = updatedBatch.nextClass
      this.date = this.main.transform(this.schedule.date)
      this.link  = updatedBatch.link[0]
    });

  }

  ngOnDestroy() {
    
    if (this.socket) {
      this.socket.disconnect();
    }
  }
  
  async LoadData() {
    this.loading=true
   await (await this.main.getbatch()).subscribe((response:any)=>{
  try {
    this.news  = response.news[0]
    this.batch  = response.batchId
    this.msg = "Next Class Schedule"
    this.schedule  = response.nextClass
    this.date = this.main.transform(this.schedule.date)
    this.link  = response.link[0]
    this.loading = false
  } catch (error) {
   this.news = "Their Are No News For This Batch"
   this.msg = "Not Scheduled Any Class"
  }
    this.loading= false
   })
  }
  


  async Loadmember() {
    this.loading=true;
  
    (await this.main.getpayement()).subscribe( async (response:any)=>{
      this.member = response[0]
      
      this.activation = this.main.transform(this.member.activation)
      this.expiration = this.main.transform(this.member.expiration)
      this.loading= false
     
  
      
  
    })
   
  
  }



}
