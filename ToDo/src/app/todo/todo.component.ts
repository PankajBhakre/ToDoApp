import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todoArray = ['Java', 'Angular'];

  constructor() { }

  ngOnInit(): void {
  }
addToDo(element){
console.log(element);
if(element.value){
  this.todoArray.push(element.value);
  element.value = '';
}
}
deleteTodo(todo){
this.todoArray = this.todoArray.filter(item => item !=todo);
}
}
