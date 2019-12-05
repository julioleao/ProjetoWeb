import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title : [null, Validators.required],
      where : [null, Validators.required]
    });
  }

  addTask(form: NgForm) {
    this.api.addTask(form)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['/task-detail', id]);
      }, (err) => {
        console.log(err);
      });
    Swal.fire(
      'Feito!',
      'tarefa adicionada!',
      'success'
    );


  }

}
