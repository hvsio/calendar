import { Component, OnInit } from '@angular/core';
import {GoalsService} from '../../goals.service';
import {ToDo} from '../../models/todo';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  currentJustify = 'justified';
  map = new Map([
    [0, 'life'],
    [1, 'university'],
    [2, 'project'],
    [3, 'work'],
  ]);

  list: string[] = ['lol', 'lmao', 'idk', 'idc', 'kek'];
  category = 'life';
  goalsList: ToDo[];


  constructor(private service: GoalsService) {
  }

  saveCategory(cat: string) {
   this.category = cat;
   this.service.getGoals(cat, result => {
     if (result) {
       this.list = result;
     }
   });
  }

  loadGoals(category: string) {
    //TODO
  }

  addGoal(cat: string, name) {
    console.log(cat);
    console.log(name);
  }


  ngOnInit() {
  }

}
