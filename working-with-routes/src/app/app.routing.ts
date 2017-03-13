import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { HomeModule } from './home/home.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'courses',
        component: CourseComponent
    },
    {
        path: 'courses/:id',
        component: CourseDetailComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);