import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResearchComponent } from './components/research/research.component';
import { ContactComponent } from './components/contact/contact.component';

// COMMON-LIB
import { TimelineComponent } from './components/common-lib/timeline/timeline.component';
import { SkillGroupComponent } from './components/common-lib/skill-group/skill-group.component';
import { ProjectCardComponent } from './components/common-lib/project-card/project-card.component';
import { TitleComponent } from './components/common-lib/title/title.component';
import { CertificateComponent } from './components/common-lib/certificate/certificate.component';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeUtilityService } from './services/theme-utility-service';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ButtonModule,
        DrawerModule,
        DialogModule,
        TooltipModule,
        SelectButtonModule,
        MatProgressBarModule,
        MatButtonModule,
        ThemeUtilityService,
        MatSlideToggleModule,
        HomeComponent,
        BackgroundComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        ResearchComponent,
        ContactComponent,
        TimelineComponent,
        SkillGroupComponent,
        ProjectCardComponent,
        TitleComponent,
        CertificateComponent
    ],
    exports: [
        MatProgressBarModule
    ],
    providers: [
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
