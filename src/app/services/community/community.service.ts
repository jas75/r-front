import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunityResponse } from 'src/app/interfaces/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  createCommunity(body): Observable<CommunityResponse> {
    return this.http.post<CommunityResponse>(this.url + '/api/community/create-community', body)
  }

  getCommunityById(communityid: string): Observable<CommunityResponse> {
    return this.http.get<CommunityResponse>(this.url + '/api/community/get-community/' + communityid)
  }
}
