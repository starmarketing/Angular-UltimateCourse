import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger | undefined;
  // detail?: Passenger = {} as Passenger;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail!.checkInDate = Date.now();
    }
  }
}
