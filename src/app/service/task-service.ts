import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../interface/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  http: HttpClient = inject(HttpClient);

  tasks = signal<Task[]>([]);

  url: string = 'http://localhost:3000/tasks';

  listTask(){
    this.http.get<Task[]>(this.url).subscribe(
      data => {
        this.tasks.set(data)
      }
    )
  }

  add(task: Task){
    this.http.post(this.url, task).subscribe(
      () => {
        this.listTask()
      }
    )
  }

}
