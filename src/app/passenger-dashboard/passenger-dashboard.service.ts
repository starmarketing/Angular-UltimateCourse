import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Passenger } from './models/passenger.interface';
import { map } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

const PASSENGER_API: string = 'http://localhost:3000/passengers';
@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<any> {
    return this.http.get(PASSENGER_API).pipe(
      map((response) => {
        return this.extractData(response);
      }),
      catchError((error) => {
        throw 'Something went wrong: ' + error; // Use console.log(err) for detail
      })
    );
  }

  // If we don't want to use OBSERVABLES we can use promise
  getPassengersPromise(): Promise<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .toPromise()
      .then((response) => {
        return this.extractData(response);
      })
      .catch((error) => {
        return 'Something went wrong: ' + error.message;
      });
  }

  updatePassenger(passenger: Passenger): Observable<Passenger[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: headers,
    };

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .pipe(
        map((response) => {
          return this.extractData(response);
        })
      );
  }

  updatePassengerPromise(passenger: Passenger): Promise<Passenger[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: headers,
    };

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .toPromise()
      .then((response) => {
        return this.extractData(response);
      });
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
function throwError(arg0: () => Error): any {
  throw new Error('Function not implemented.');
}
