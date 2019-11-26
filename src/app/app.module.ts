import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatSidenavModule,
   MatTableModule,
   MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      TaskDeleteComponent,
      TaskCreateComponent,
      TaskDetailComponent,
      TaskReadComponent,
      TaskUpdateComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatButtonModule,
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
