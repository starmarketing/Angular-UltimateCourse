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
      },
      {
        id: 2,
        name: 'khan',
        active: false,
        stamp: null,
        children: [
          {
            name: 'Khan Sahab',
            age: null,
          },
        ],
      },
    ];
  }
}
