import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Task } from 'src/model/task';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'title', 'where' ];
  dataSource: Task[];
  dSource = new MatTableDataSource(this.dataSource);
  isLoadingResults = false;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getTasks()
    .subscribe(res => {
      this.dataSource = res;
      this.dSource = new MatTableDataSource(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dSource.filter = filterValue.trim().toLowerCase();
  }

}
