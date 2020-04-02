import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private endpoint = 'http://localhost:4444';

  constructor(private http: HttpClient) {
  }
  getGoals(category: string, callback) {
    // to be done
    this.http.get(`${this.endpoint}/goals/${category}`)
      .subscribe(res => {
          console.log(res);
          callback = res;
        }
      );
  }

  saveGoal(goal, callback ) {
    if (goal._id) {
      this.http.put(`${this.endpoint}/goals/${goal._id}`, goal)
        .subscribe(res => {
            callback(true);
            console.log(res);
          }
        );
    } else {
      this.http.post(`${this.endpoint}/goals`, goal)
        .subscribe(res => {
            callback(true);
            console.log(res);
          }
        );

    }
  }
}
