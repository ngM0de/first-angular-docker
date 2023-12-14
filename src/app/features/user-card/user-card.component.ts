import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {UserCheckModel} from "../../../models/api.model";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [
        AsyncPipe,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
    public userCheck: UserCheckModel;
    public nameControl = new FormControl<string>('', [Validators.required, Validators.minLength(5)])

    public sendName(): void {
        if (this.nameControl.value !== null) {
            this.apiService.registerNewUser(this.nameControl.value).subscribe(console.log)
        }
    };

    public logOut(): void {
        //     add history column
    };

    constructor(public apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.getUser().subscribe(user => this.userCheck = user)
    }
}
