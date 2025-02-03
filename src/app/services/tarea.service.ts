import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'http://localhost:5261/api'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Tarea[]> {    
    return this.http.get<Tarea[]>(this.apiUrl + '/tareas'); //
  }

  getTarea(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/Tareas/${id}`);
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl+'/tareas', tarea);
  }

  updateTarea(id: number, tarea: Tarea): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/tareas/${id}`, tarea);
  }

  deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tareas/${id}`);
  }
}
