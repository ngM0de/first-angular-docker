import {Component, isDevMode} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../api.service";
import {dev} from "../environments";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule],
    template: `
        <button (click)="apiService.getApi('').subscribe()">Root</button>
        <button (click)="apiService.getApi('page').subscribe()">Page</button>
        <p>{{ apiService.result }}</p>
        <router-outlet></router-outlet>
    `,
    styles: [],
    providers: [ApiService]
})
export class AppComponent {
    constructor(public apiService: ApiService) {
        if (isDevMode()) {
            this.apiService.environment = dev;
        }
    }

}
