import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delegation-details',
  templateUrl: './delegation-details.component.html',
  styleUrls: ['./delegation-details.component.scss']
})
export class DelegationDetailsComponent implements OnInit {
  public Approval: boolean = true;
  public Requests: boolean = false;
  public buttonName:any = 'Show';
  constructor() { }

  ngOnInit() {
  }
  approval(){
    this.Approval = !this.Approval;
    this.Requests = false;
    // if(this.Approval){
    //   this.buttonName = "Hide";
    // }
    // else{
    //   this.buttonName = "Show";
    // }
      
  }
  pending(){
    this.Requests = !this.Requests;
    this.Approval = false;
  }
}
