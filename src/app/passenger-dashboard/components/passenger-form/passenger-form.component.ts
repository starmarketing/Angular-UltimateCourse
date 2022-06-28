import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Baggage } from '../../models/baggage.interface';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger | undefined;
  // detail?: Passenger = {} as Passenger;

  @Output()
  update: EventEmitter<any> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage',
    },
    {
      key: 'hand-only',
      value: 'Hand baggage',
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hold-hand',
      value: 'Hand & Hold baggage',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail!.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
