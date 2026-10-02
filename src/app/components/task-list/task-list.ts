import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit{
  
  taskService = inject(TaskService)
  
  ngOnInit(): void {
    this.taskService.listTask()
  }

}
