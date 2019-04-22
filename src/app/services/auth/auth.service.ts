import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { Identity } from 'src/app/interfaces/identity';



const TOKEN_KEY = 'access_token';
const USER_ID = 'userid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false)

  constructor(
    private storage: Storage,
    private helper: JwtHelperService,
    private plt: Platform,
    private http: HttpClient,
    private alertController: AlertController
  ) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
  }


  getUserId(): Promise<any> {
    return this.storage.get(USER_ID);
  }
  
  // check if we have a token store
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  register(credentials) {
    return this.http.post(this.url + '/api/register', credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials): Observable<Identity> {
    return this.http.post<Identity>(this.url + '/api/login', credentials)
    .pipe(
      tap(res => {
        this.storage.set(TOKEN_KEY, res['token']);
        this.storage.set(USER_ID, res['userid']);
        // i cand decode the token to see if theres information i need 
        this.user = this.helper.decodeToken(res['token']);
        this.authenticationState.next(true);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getSpecialData() {
    return this.http.get(this.url + '/api/special').pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You aree not authorized for this');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.storage.remove(USER_ID).then(() => {
        this.authenticationState.next(false);
      });
    });
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });

    alert.then(thealert => thealert.present());
  }

}
