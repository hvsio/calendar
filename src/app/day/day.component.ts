import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventServiceService} from '../event-service.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DAYComponent implements OnInit {


  constructor(private route: ActivatedRoute, private data: EventServiceService) {
  }

  routing: any;
  list: any[];

  ngOnInit() {
    this.routing = this.route.params.subscribe(p => {
      console.log(p);
    });

    this.data.getEvents(events => {
      this.list = events;
    });
  }


}
