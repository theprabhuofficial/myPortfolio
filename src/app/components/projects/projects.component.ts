import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
  showAllProjects() {
    document.querySelectorAll('.frontend-projects, .backend-projects, .wordpress-projects, .fullstack-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'block';
    });
  }

  showFrontendProjects() {
    document.querySelectorAll('.frontend-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'block';
    });
    document.querySelectorAll('.backend-projects, .wordpress-projects, .fullstack-projects, .all-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'none';
    });
  }

  showBackendProjects() {
    document.querySelectorAll('.backend-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'block';
    });
    document.querySelectorAll('.frontend-projects, .wordpress-projects, .fullstack-projects, .all-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'none';
    });
  }

  showFullStackProjects() {
    document.querySelectorAll('.fullstack-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'block';
    });
    document.querySelectorAll('.frontend-projects, .wordpress-projects,.backend-projects,.all-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'none';
    });
  }

  showWordPressProjects() {
    document.querySelectorAll('.wordpress-projects').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'block';
    });
    document.querySelectorAll('.frontend-projects, .backend-projects, .all-projects, .fullstack-projects ').forEach((element: Element) => {
      (element as HTMLElement).style.display = 'none';
    });
  }
}
