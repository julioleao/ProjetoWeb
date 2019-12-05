import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Task } from 'src/model/task';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'where', 'detail' ];
  dataSource: Task[];
  dSource = new MatTableDataSource(this.dataSource);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getTasks()
    .subscribe(res => {
      this.dataSource = res;
      this.dSource = new MatTableDataSource(this.dataSource);
      this.dSource.paginator = this.paginator;
      this.dSource.sort = this.sort;
    }, err => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {
    this.dSource.filter = filterValue.trim().toLowerCase();
  }

}
