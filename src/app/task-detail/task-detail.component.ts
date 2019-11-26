import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/model/task';
import { ApiService } from 'src/service/api.service';

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
      .subscribe(sata => {
        this.isLoadingresults = false;
      });
  }

  deleteTask(id) {
    this.isLoadingresults = true;
    this.api.deleteTask(id)
      .subscribe(res => {
        this.isLoadingresults = false;
        this.router.navigate(['/task']);
      }, (err) => {
        console.log(err);
        this.isLoadingresults = false;
      });
  }

}
