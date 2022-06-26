import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [ PassengerViewerComponent],
  providers: [
    // in angular a service is called a provider
    PassengerDashboardService,
  ],
})
export class PassengerDashboardModule {}
