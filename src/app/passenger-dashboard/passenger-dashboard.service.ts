import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
  constructor() {}

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
