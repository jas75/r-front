import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = environment.url;
  
  constructor(
    private http: HttpClient
  ) { }


  getProfile(userid: string): Observable<any> {
    return this.http.get(this.url + '/api/user/get-profile/' + userid);
  }
}
