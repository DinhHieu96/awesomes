import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from './awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  API_URL = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(this.API_URL);
  }

  addAwesome(awesome: Awesome): Observable<Awesome> {
    return this.http.post<Awesome>(this.API_URL, awesome);
  }
  editAwesome(id: string, awesome: Awesome): Observable<Awesome> {
    return this.http.put<Awesome>(this.API_URL + `${id}`, awesome);
  }
  deleteAwesome(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(this.API_URL + `${id}`);
  }
  detailAwesome(id: string): Observable<Awesome> {
    return this.http.get<Awesome>(this.API_URL + `${id}`);
  }
}
