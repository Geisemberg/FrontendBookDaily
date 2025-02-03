import { Routes } from '@angular/router';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaCreateComponent } from './components/tarea-create/tarea-create.component';
import { TareaEditComponent } from './components/tarea-edit/tarea-edit.component';
import { TareaDeleteComponent } from './components/tarea-delete/tarea-delete.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaListComponent },
  { path: 'tareas/create', component: TareaCreateComponent },
  { path: 'tareas/edit/:id', component: TareaEditComponent },
  { path: 'tareas/delete/:id', component: TareaDeleteComponent }
];
