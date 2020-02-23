import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class CalendarEvent {
  name: string;
  start: NgbTimeStruct;
  end: NgbTimeStruct;
  category: string;
  day: Date;

  constructor(name = 'event', start, end, category, day) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.category = category;
    this.day = day;
  }

}
