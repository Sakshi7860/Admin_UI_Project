import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService
{
    constructor(private httpClient: HttpClient){

    }
    getData(): Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    }
}