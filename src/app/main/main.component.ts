import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../route-animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    animations: [
        // fader
        // slider
        // transformer
        // stepper
        slideInAnimation
    ]
})
export class MainComponent implements OnInit {
   section;
    allSection;
    state = 'smaller';
    animate() {
        // tslint:disable-next-line: triple-equals
        this.state = this.state == 'larger' ? 'smaller' : 'larger';
    }
    constructor() { }

    ngOnInit() {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    receiveEvent(event) {
        console.log(event);
        this.section = event['section'];
    }

}
