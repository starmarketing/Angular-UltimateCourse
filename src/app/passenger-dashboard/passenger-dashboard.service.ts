import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Passenger } from './models/passenger.interface';
import { map } from 'rxjs/operators';

const PASSENGER_API: string = 'http://localhost:3000/passengers';
@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).pipe(
      map((response) => {
        return this.extractData(response);
      })
    );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger[]> {
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger).pipe(
      map((response) => {
        return this.extractData(response);
      })
    );
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).pipe(
      map((response) => {
        return this.extractData(response);
      })
    );
  }

  private extractData(res: any) {
    let body = typeof res != 'object' ? res.json() : res; // If response is a JSON use json(), If response is a String use text()
    if (body) {
      return body;
    } else {
      return {};
    }
  }
}
