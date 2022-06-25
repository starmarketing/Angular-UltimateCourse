import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  
  passenger: Passenger[] = [];
  
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passenger = this.passengerService.getPassengers();
  }

  handleRemove(event: Passenger) {
    this.passenger = this.passenger.filter((p) => {
      return p.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    // Immutable state change
    // It looped over every element in the parent data and changed it through object.assign
    console.log('before: ',this.passenger);
    this.passenger = this.passenger.map((p: Passenger) => {
      if (p.id == event.id) {
        // override the properties of passenger
        p = Object.assign({}, p, event);
      }
      return p;
    });
    console.log('after: ',this.passenger);
  }
}
