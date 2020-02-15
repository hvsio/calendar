import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-ev',
  templateUrl: './add-new-ev.component.html',
  styleUrls: ['./add-new-ev.component.css']
})
export class AddNewEvComponent implements OnInit {

  startTime: NgbTimeStruct  = {hour: 12, minute: 30, second: 10};
  endTime: NgbTimeStruct  = {hour: 12, minute: 30, second: 10};

  constructor() { }

  ngOnInit() {

  }

}
