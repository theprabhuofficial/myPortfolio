import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
  {
    path: '',
   component:HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: 'education',
      component: EducationComponent // or just a placeholder if it's part of HomeComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
