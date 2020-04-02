import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventServiceService} from '../event-service.service';
import {MatDatepickerInputEvent, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AddNewEvComponent} from '../components/add-new-ev/add-new-ev.component';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DAYComponent implements OnInit {

  routing: any;
  list: any[];
  Day: Date = new Date();
  myDate: string;
  pipe = new DatePipe('en-GB');

  getDay(day: any) {
    console.log(day);
  }

  transformDay(day: Date) {
    this.myDate = this.pipe.transform(this.Day, 'dd.MM.yyyy');
  }

  changeDay(type: string, event: MatDatepickerInputEvent<Date>) {
    this.Day = event.value;
    this.transformDay(this.Day);
    console.log(this.myDate);
  }

  constructor(private route: ActivatedRoute,
              private data: EventServiceService,
              private iconReg: MatIconRegistry,
              private dom: DomSanitizer) {
    this.iconReg.addSvgIcon('calendar', this.dom.bypassSecurityTrustResourceUrl('../assets/img/calendar.svg'));
  }

  ngOnInit() {
    this.transformDay(this.Day);
    this.data.getEventFromADay(this.myDate, events => {
      this.list = events;
    });
  }


}
