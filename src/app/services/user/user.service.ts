import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = environment.url;
  
  constructor(
    private http: HttpClient
  ) { }


  getProfile(userid: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.url + '/api/user/get-profile/' + userid);
  }
}
