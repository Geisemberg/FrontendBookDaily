import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-edit.component.html',
  styleUrls: ['./tarea-edit.component.css']
})
export class TareaEditComponent implements OnInit {
  tarea: Tarea | null = null;

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tareaService.getTarea(id).subscribe(data => {
      this.tarea = data;
    }, error => {
      console.error('Error fetching tarea:', error);
      this.router.navigate(['/tareas']);
    });
  }

  updateTarea(): void {
    if (this.tarea && this.tarea.id) {
      this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
        this.router.navigate(['/tareas']);
      }, error => {
        console.error('Error updating tarea:', error);
      });
    }
  }
}
