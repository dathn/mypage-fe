import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children:
            [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'prefix'
                },
                {
                    path: 'home',
                    loadChildren: './home/home.module#HomeModule',
                    data: { animation: 'homePage' }
                },
                {
                    path: 'about',
                    loadChildren: './about/about.module#AboutModule',
                    data: { animation: 'aboutPage' }
                },
                {
                    path: 'certs',
                    loadChildren: './certifications/certifications.module#CertificationsModule',
                    data: { animation: 'certPage' }
                },
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
