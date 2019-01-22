import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

// import { JwtService } from './jwt.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WcProductApiService {
  constructor(
    private http: HttpClient,
    // private jwtService: JwtService
  ) {}

  private formatErrors(error: any) {
    console.error(error);
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.wcoffers_api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    console.log(path);
    console.log(JSON.stringify(body));
    return this.http.put(
      `${environment.wcoffers_api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.wcoffers_api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.wcoffers_api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}