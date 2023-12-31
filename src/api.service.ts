import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserCheckModel} from "./models/api.model";
import {Environment} from "./environments/environment.model";
import {environment} from "./environments/ebvironment.prod";

@Injectable()
export class ApiService {
    public environment: Environment = environment;
    public readonly apiUrl$ = new BehaviorSubject<string | null>(null)

    get apiUrl() {
        return this.apiUrl$.value
    }

    public result: string | null = null

    constructor(private http: HttpClient) {
    }

    public getApi(route: string): Observable<string> {
        return this.http.get<string>(this.apiUrl + "/" + route).pipe(tap(res => this.result = res))
    };

    public getUser(): Observable<UserCheckModel> {
        return this.http.get<UserCheckModel>(this.apiUrl + '/check-user')
    }

    public registerNewUser(name: string): Observable<UserCheckModel> {
        return this.http.post<UserCheckModel>(this.apiUrl + '/register-user', {name})
    }
}
