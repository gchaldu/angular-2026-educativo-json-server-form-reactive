import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../service/task-service';
import { Task } from '../../interface/Task';

@Component({
  selector: 'app-task-create',
  imports: [ReactiveFormsModule],
  templateUrl: './task-create.html',
  styleUrl: './task-create.css',
})
export class TaskCreate {

  taskService = inject(TaskService)

  fb: FormBuilder = inject(FormBuilder)

  formulario = this.fb.nonNullable.group(
    {
      id:[0, [Validators.required]],
      task: ['', [Validators.required]] 
    }
  )

  add(){

    if(this.formulario.invalid) return;

    let t: Task = {
      id: this.formulario.controls['id'].value,
      task: this.formulario.controls['task'].value,
    }

    this.taskService.add(t)
  }

}
