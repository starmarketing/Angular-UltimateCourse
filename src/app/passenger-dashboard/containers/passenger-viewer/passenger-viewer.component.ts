import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger | undefined;
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService.getPassenger(1).subscribe((data: Passenger) => {
      this.passenger = data;
      console.log(data);
    });
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data) => {
      this.passenger = Object.assign({}, this.passenger, event);
      console.log(data);
    });
  }
}
