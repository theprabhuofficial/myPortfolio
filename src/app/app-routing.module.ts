import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './components/container/container.component';


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
      component: EducationComponent // or just a placeholder if it's part of HomeComponent
    },
    {
      path: 'skill',
      component: SkilsComponent // or just a placeholder if it's part of HomeComponent
    },
    {
      path: 'project',
      component: ProjectsComponent // or just a placeholder if it's part of HomeComponent
    },
    {
      path: 'experience',
      component: ExperienceComponent // or just a placeholder if it's part of HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent // or just a placeholder if it's part of HomeComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
