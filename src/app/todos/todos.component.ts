import {Component, OnInit} from '@angular/core';
import {ToDo} from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosList: ToDo[];

  toDo1 = new ToDo('Water plants', true);
  toDo2 = new ToDo('IDK', false);


  constructor() {
  }

  ngOnInit() {
    this.todosList = [this.toDo1, this.toDo2];
    console.log(this.todosList);
  }

}
