import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PreAuthService{
    constructor(private http:HttpClient){}

    login(data:any){
        let d = {
            "email": "eve.holt@reqres.in",
            "password": ""
        }
        return this.http.post("https://reqres.in/api/register", d)
    }
}