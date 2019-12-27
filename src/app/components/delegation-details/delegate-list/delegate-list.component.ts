import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-delegate-list',
  templateUrl: './delegate-list.component.html',
  styleUrls: ['./delegate-list.component.scss']
})
export class DelegateListComponent implements OnInit {
  DelegationDetails:string;
  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    // const url: string = activatedRoute.snapshot.('DelegationDetails/approval')
   }

   ngOnInit() {
    this.DelegationDetails = this.activatedRoute.snapshot.paramMap.get("approval")
    this.activatedRoute.params
    .subscribe(
      (params:Params)=>{

      }
    )
  }
  
}
