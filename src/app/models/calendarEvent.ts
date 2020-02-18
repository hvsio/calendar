import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class CalendarEvent {
  name: string;
  start: NgbTimeStruct;
  end: NgbTimeStruct;
  category: string;

  constructor(name = 'event', start, end, category) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.category = category;
  }

}
