import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {    
    this.tareaService.getTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  editTarea(id: number): void {
    // Implementar la lógica para editar tarea
  }

  deleteTarea(id: number): void {
    this.tareaService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
    });
  }
}
