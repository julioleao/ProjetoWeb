import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/model/task';
import { ApiService } from 'src/service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task = { id: null, title: '', where: '' };
  isLoadingresults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params.id);
  }

  getTask(id) {
    this.api.getTask(id)
      .subscribe(data => {
        this.task = data;
        console.log(this.task);
        this.isLoadingresults = false;
      });
  }

  deleteTask(id) {

    Swal.fire({
      title: 'Está certo disso?',
      text: 'você não poderá reverter essa operação',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, vala!'
    }).then((result) => {
      if (result.value) {
        this.api.deleteTask(id)
      .subscribe(res => {
        this.isLoadingresults = false;
        this.router.navigate(['/task']);
      }, (err) => {
        console.log(err);
        this.isLoadingresults = false;
      });
        Swal.fire(
          'Vala!',
          'Sua tarefa foi apagada!',
          'success'
        );
      }
    });

  }

}
