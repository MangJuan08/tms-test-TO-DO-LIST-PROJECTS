import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../model/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  newProjectsQuantity = new Subject<any>();
  onProgressProjectQuantity = new Subject<any>();
  completeProjectQuantity = new Subject<any>();
  constructor(private http:HttpClient) { }

  getAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>("http://localhost:3000/projects")
  }

  deleteProject(id:Number) {
    return this.http.delete("http://localhost:3000/projects/"+id);
  }

  addNewProject(project:any) {
    return this.http.post("http://localhost:3000/projects",project);
  }

  editProject(project:any) {
    return this.http.put("http://localhost:3000/projects/"+project.id,project);
  }

}
