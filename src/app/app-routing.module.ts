import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './components/container/container.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
 
  {
    path: '',
   component:ContainerComponent
  },
  {
  path: 'home',
  component: ContainerComponent,
  children: [
    {
      path: 'education',
      component: EducationComponent 
    },
    {
      path: 'skill',
      component: SkilsComponent 
    },
    {
      path: 'project',
      component: ProjectsComponent 
    },
    {
      path: 'experience',
      component: ExperienceComponent 
    },
    {
      path: 'contact',
      component: ContactComponent 
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
