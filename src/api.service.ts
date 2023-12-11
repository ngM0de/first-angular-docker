import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Environment, prod} from "./environments";

@Injectable()
export class ApiService {
    public environment: Environment = prod
    private apiUrl = this.environment.apiUrl
    public result: string | null = null

    constructor(private http: HttpClient) {
    }

    public getApi(route: string): Observable<string> {
        return this.http.get<string>(this.apiUrl + "/" + route).pipe(tap(res => this.result = res))
    };
}
