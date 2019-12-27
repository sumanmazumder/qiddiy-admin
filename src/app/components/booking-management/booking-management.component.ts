import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['DelegationDetails']);
  }
}
