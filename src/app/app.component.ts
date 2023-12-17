import {Component, isDevMode} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../api.service";
import {environment} from "../environments/environments";
import {UserCardComponent} from "./features/user-card/user-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule, UserCardComponent],
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.scss',
    providers: [ApiService]
})
export class AppComponent {
    constructor(public apiService: ApiService) {
        if (isDevMode()) {
            this.apiService.environment = environment;
            Object.freeze(this.apiService.environment)
            console.log(`inside isDevMode`)
            console.log(this.apiService.environment)
        }
        this.apiService.apiUrl$.next(this.apiService.environment.apiEndpoint)

    }

}
