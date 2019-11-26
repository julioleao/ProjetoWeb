import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title : [null, Validators.required],
      where : [null, Validators.required]
    });
  }

  addTask(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addTask(form)
      .subscribe(res => {
        const id = res.id;
        this.isLoadingResults = false;
        this.router.navigate(['/task-detail', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
