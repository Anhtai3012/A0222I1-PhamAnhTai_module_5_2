import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
let _id =1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos:Todo []= [];
  content = new FormControl();

  change() {
    const value = this.content.value;
    console.log(value)
    if (value){
      const todo: Todo = {
        id:_id++,
        content:value,
        complete:false
      };
      console.log(todo)
      this.todos.push(todo);
      this.content.reset();
    }
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
