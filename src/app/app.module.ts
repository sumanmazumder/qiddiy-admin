import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatTabsModule, MatDialogModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

import { DelegationDetailsComponent } from './components/delegation-details/delegation-details.component';
import { ApprovalComponent } from './components/delegation-details/approval/approval.component';
import { PendingComponent } from './components/delegation-details/pending/pending.component';
import { BookingManagementComponent } from './components/booking-management/booking-management.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { UpdateTimeComponent } from './components/update-time/update-time.component';
import { DelegateListComponent } from './components/delegation-details/delegate-list/delegate-list.component';
import { PendingRequestComponent } from './components/pending/pending.component';

@NgModule({
  declarations: [
    AppComponent,
    DelegationDetailsComponent,
    ApprovalComponent,
    PendingComponent,
    BookingManagementComponent,
    AddMemberComponent,
    UpdateTimeComponent,
    DelegateListComponent,
    PendingRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,WavesModule, ButtonsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule, MatDialogModule, MatSortModule, MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSnackBarModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,MatInputModule,MatRadioModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
