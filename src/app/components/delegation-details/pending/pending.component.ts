import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  down:boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  add(){
    console.log("add");
    this.router.navigate(['DelegationDetails/approval']);
  }

}
