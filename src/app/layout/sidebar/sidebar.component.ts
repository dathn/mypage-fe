import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    @Output() send = new EventEmitter();
    private navTogglerBtn;
    private aside;
    private allSection;

    constructor() { }

    ngOnInit() {
    }

    navClick() {
        this.navTogglerBtn = document.querySelector('.nav-toggler');
        this.aside = document.querySelector('.aside');
        this.aside.classList.toggle('open');
        this.navTogglerBtn.classList.toggle('open');
        this.allSection = document.querySelector('.section');
        this.allSection.classList.toggle('open');
    }
}
