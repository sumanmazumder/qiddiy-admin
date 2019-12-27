import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-time',
  templateUrl: './update-time.component.html',
  styleUrls: ['./update-time.component.scss']
})
export class UpdateTimeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['DelegationDetails/approval']);
  }
  update(){
    // this.router.navigate(['DelegationDetails/approval']);
  }
}
