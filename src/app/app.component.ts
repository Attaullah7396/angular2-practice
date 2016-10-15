import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title:string;
   toDoTasks:Array<string> = [];
   user = {
     taskData : ""
   }

  constructor(){
    this.title = "First Angular app using @angular-cli";
  }

    addTask(text:HTMLInputElement):void{
      if(text.value){
        this.toDoTasks.push(text.value);
        text.value = null;
      }
   }
   deleteTask(task:HTMLInputElement){
      var index = this.toDoTasks.indexOf(task.value);
      this.toDoTasks.splice(index,1)
   }
}
