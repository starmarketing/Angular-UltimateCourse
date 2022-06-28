import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((data) => {
          return this.passengerService.getPassenger(data['id']);
        })
      )
      .subscribe((data: Passenger) => (this.passenger = data));

    // this.route.params.pipe(
    //   switchMap((data) => {
    //     this.passengerService
    //       .getPassenger(data.id)
    //       .subscribe((data: Passenger) => {
    //         this.passenger = data;
    //         console.log(data);
    //       });
    //   })
    // );
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data) => {
      this.passenger = Object.assign({}, this.passenger, event);
      console.log(data);
    });
  }
}
