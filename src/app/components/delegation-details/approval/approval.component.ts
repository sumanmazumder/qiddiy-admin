import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  id: number;
  ngOnInit() {
    // const id = this.route.snapshot.params[]
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id'];
      }
    )
  }
  add(){
    this.router.navigate(['addMember']);
  }
  SlotEdit(){
    this.router.navigate(['updateTime']);
  }
  edit(){
    this.router.navigate(['addMember']);
  }
}
