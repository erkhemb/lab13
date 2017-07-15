import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { ProfileComponent } from "./profile.component";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'profile', redirectTo: '/', pathMatch: 'full' },
    { path: 'profile/:id', component: ProfileComponent },
    { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
