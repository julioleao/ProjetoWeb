import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  id: number = null;
  taskForm: FormGroup;
  title: any = '';
  where: any = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gettask(this.route.snapshot.params.id);
    this.taskForm = this.formBuilder.group({
      title : [null, Validators.required],
      where : [null, Validators.required]
    });
  }

  gettask(id) {
    this.api.getTask(id).subscribe(data => {
      this.id = data.id;
      this.taskForm.setValue({
        title: data.title,
        where: data.where
      });
    });
  }

  updateTask(form: NgForm) {
    Swal.fire({
      title: 'Eaí',
      text: 'deseja salvar a edição?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim, quero!'
    }).then((result) => {
      if (result.value) {
        this.isLoadingResults = true;
        this.api.updateTask(this.id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/task-detail/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
        Swal.fire(
          'Boa!',
          'Edição salva!',
          'success'
        );
      }
    });
  }

}
