import {Injectable} from '@angular/core';
import {CalendarEvent} from './models/calendarEvent';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private endpoint = 'http://localhost:4444';

  constructor(private http: HttpClient) {
  }
  getEvents(callback) {
    // to be done
    this.http.get(`${this.endpoint}/events`)
      .subscribe(res => {
        console.log(res);
        console.log(res);
        callback = res;
      }
    );
  }

  getEvent(eventID: string, callback) {
    this.http.get(`${this.endpoint}/events/${eventID}`)
      .subscribe(response => {
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
