import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatPaginator,
   MatInputModule,
   MatListModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatSidenavModule,
   MatTableModule,
   MatToolbarModule,
   MatPaginatorModule,
   MatSortModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      TaskCreateComponent,
      TaskDetailComponent,
      TaskReadComponent,
      TaskUpdateComponent
   ],
   imports: [
      BrowserModule,
      NgxPaginationModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatSortModule,
      MatButtonModule,
      MatPaginatorModule,
      MatInputModule,
      MatCardModule,
      MatIconModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSidenavModule,
      MatTableModule,
      MatToolbarModule,
      LayoutModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
