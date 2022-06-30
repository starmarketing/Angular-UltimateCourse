import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passenger: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService, private router: Router) {}

  ngOnInit(): void {
    /*
      The biggest difference is that Promises won't change their value once they have been fulfilled. They can only emit (reject, resolve) a single value. On the other hand, observables can emit multiple results. The subscriber will be receiving results until the observer is completed or unsubscribed from.
    */

    // APPROACH - 1 : Using OBSERVABLES
    // this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
    //   this.passenger = data;
    // });

    // APPROACH - 2 : Using PROMISES
    this.passengerService.getPassengersPromise().then((data: Passenger[]) => {
      this.passenger = data;
    });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = this.passenger.filter((p) => {
          return p.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger[]) => {
        this.passenger = this.passenger.map((p: Passenger) => {
          if (p.id == event.id) {
            // override the properties of passenger
            p = Object.assign({}, p, event);
          }
          return p;
        });
      });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers',event.id]);
  }
}
