import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  constructor() {}
  passenger: Passenger[] = [];

  ngOnInit(): void {
    this.passenger = [
      {
        id: 1,
        name: 'emad',
        active: true,
        stamp: 1508330494000,
        checkedIn: true,
        children: [
          {
            name: 'Badshah',
            age: 20,
          },
        ],
      },
      {
        id: 2,
        name: 'hassan',
        active: false,
        stamp: null,
        children: null,
        checkedIn: false,
      },
      {
        id: 3,
        name: 'khan',
        active: false,
        stamp: null,
        children: [
          {
            name: 'Khan Sahab',
            age: null,
          },
        ],
        checkedIn: false,
      },
    ];
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
    // this.passenger = this.passenger.map((p: Passenger) => {
    //   if (p.id == event.id) {
    //     // override the properties of passenger
    //     p = Object.assign({}, p, event);
    //   }
    //   return p;
    // });
    console.log('after: ',this.passenger);
  }
}
