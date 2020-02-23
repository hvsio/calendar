import {Component, Input, OnInit} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent} from '../../models/calendarEvent';
import {MatSnackBar} from '@angular/material';
import {EventServiceService} from '../../event-service.service';
import {DAYComponent} from '../../day/day.component';

@Component({
  selector: 'app-add-new-ev',
  templateUrl: './add-new-ev.component.html',
  styleUrls: ['./add-new-ev.component.css']
})
export class AddNewEvComponent implements OnInit {

  name: string;
  category: string;
  startTime: NgbTimeStruct = {hour: 12, minute: 30, second: 10};
  endTime: NgbTimeStruct = {hour: 12, minute: 30, second: 10};
  event: CalendarEvent;
  @Input() day: any;

  constructor(private snackBar: MatSnackBar,
              private service: EventServiceService) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['snackbar']
    });
  }


  addEvent(name: string, startTime: NgbTimeStruct, endTime: NgbTimeStruct, category: string) {
    if (this.checkTime()) {
      this.event = new CalendarEvent(name, startTime, endTime, category, this.day);
      this.service.saveEvent(this.event, result => {
        if (result) {
          console.log('Adding successful');
        }
      });
      console.log(this.event);

    } else {
      this.openSnackBar('The time frames are incorrect', '');
    }

  }

  checkTime(): boolean {
    if (this.endTime.hour > this.startTime.hour) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    console.log(this.day);
    console.log('xd');
  }

}
