import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventServiceService} from '../event-service.service';
import {SvgIconRegistryService} from 'angular-svg-icon';
import {MatDatepickerInputEvent, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DAYComponent implements OnInit {

  routing: any;
  list: any[];
  day: any = Date.now();

  getDay(day: any) {
    console.log(day);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.day = event.value;
  }

  constructor(private route: ActivatedRoute, private data: EventServiceService, private iconReg: MatIconRegistry, private dom: DomSanitizer) {
    this.iconReg.addSvgIcon('calendar', this.dom.bypassSecurityTrustResourceUrl('../assets/img/calendar.svg'));
  }

  ngOnInit() {
    this.routing = this.route.params.subscribe(p => {
      console.log(p);
    });

    this.data.getEvents(events => {
      this.list = events;
    });
  }


}
