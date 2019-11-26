import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


const routes: Routes = [
  {
    path: 'task',
    component: TaskReadComponent,
    data: { title: 'Lista de Tarefas' }
  },
  {
    path: 'task-detail/:id',
    component: TaskDetailComponent,
    data: { title: 'Detalhes da Tarefa' }
  },
  {
    path: 'task-new',
    component: TaskCreateComponent,
    data: { title: 'Adicionar Tarefa' }
  },
  {
    path: 'task-edit/:id',
    component: TaskUpdateComponent,
    data: { title: 'Editar Tarefa' }
  },
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
