import {Injectable} from '@angular/core';
import {CalendarEvent} from './models/calendarEvent';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private endpoint = environment.url;

  constructor(private http: HttpClient) {
  }
  getEvents(callback) {
    // to be done
    this.http.get(`${this.endpoint}/events`)
      .subscribe(res => {
        console.log(res);
        callback = res;
      }
    );
  }

  getEventFromADay(day: string, callback) {
    this.http.get(`${this.endpoint}/events/${day}`)
      .subscribe(response => {
        console.log(response);
        callback(response);
      });
  }

  saveEvent(event, callback ) {
    if (event._id) {
      this.http.put(`${this.endpoint}/events/${event._id}`, event)
        .subscribe(res => {
            callback(true);
            console.log(res);
          }
        );
    } else {
      this.http.post(`${this.endpoint}/events`, event)
        .subscribe(res => {
            callback(true);
            console.log(res);
          }
        );

    }
  }


}
