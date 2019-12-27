import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegationDetailsComponent } from './components/delegation-details/delegation-details.component';
import { ApprovalComponent } from './components/delegation-details/approval/approval.component';
import { PendingComponent } from './components/delegation-details/pending/pending.component';
import { PendingRequestComponent} from './components/pending/pending.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { UpdateTimeComponent  } from './components/update-time/update-time.component';
import { BookingManagementComponent  } from './components/booking-management/booking-management.component';
const routes: Routes = [
  {path: '', redirectTo:'/booking', pathMatch: "full"},
  {path: 'booking', component: BookingManagementComponent,},
  {path: 'pendingRequest', component: PendingRequestComponent,},
  {path:'addMember', component:AddMemberComponent},
  {path: 'DelegationDetails', component: DelegationDetailsComponent, children:[
    { path: '', component: PendingComponent },
    {path: 'approval', component: ApprovalComponent},
    {path: 'pending', component: PendingComponent},
  ]},
  
  {path: 'addMember', component: AddMemberComponent},
  {path: 'updateTime', component: UpdateTimeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
