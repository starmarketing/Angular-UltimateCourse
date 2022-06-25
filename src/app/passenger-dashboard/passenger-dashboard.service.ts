import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Passenger[] {
    return [
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
}
