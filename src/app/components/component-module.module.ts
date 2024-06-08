import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PreloaderComponent } from './preloader/preloader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { PopupComponent } from './popup/popup.component';
import { SkilsComponent } from './skils/skils.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { WordpresComponent } from './wordpres/wordpres.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HundredDaysOfLeetcodeComponent } from './leetcode/hundred-days-of-leetcode/hundred-days-of-leetcode.component';
import { LeetcodeHeaderComponent } from './leetcode/leetcode-header/leetcode-header.component';
import { LeetcodeHomeComponent } from './leetcode/leetcode-home/leetcode-home.component';
 
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    LoadingspinnerComponent,
    HomeComponent,
    EducationComponent,
    PopupComponent,
    SkilsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ContainerComponent,
    AllprojectsComponent,
    FrontendComponent,
    BackendComponent,
    WordpresComponent,
    FullstackComponent,
    HundredDaysOfLeetcodeComponent,
    LeetcodeHeaderComponent,
    LeetcodeHomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    PreloaderComponent,
    LoadingspinnerComponent,
    MatProgressSpinnerModule,
    HomeComponent,
    EducationComponent,
    PopupComponent,
    SkilsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ContainerComponent,
    AllprojectsComponent,
    FrontendComponent,
    BackendComponent,
    WordpresComponent,
    FullstackComponent,
    LeetcodeHeaderComponent,
    LeetcodeHomeComponent,
    HundredDaysOfLeetcodeComponent
  ]
})
export class ComponentModuleModule { }
