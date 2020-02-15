export class CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  color: string;
  draggable: boolean;

  constructor(title = 'event', start, end, color) {
    this.start = start;
    this.end = end;
    this.color = color;
    this.title = title;
  }

}
