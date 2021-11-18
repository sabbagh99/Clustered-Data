import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private url = 'http://localhost:8090/dealsDetails/';

  constructor(private http: HttpClient) {
  }

  getDealsDetails(): Observable<any> {
    
    return this.http.get(`${this.url}`);
  }

  addDeals(deals: Object): Observable<Object> {
    return this.http.post(`${this.url}`, deals);
  }

  getOneDealDetail(id: number): Observable<any> {
    
    return this.http.get(`${this.url}/${id}`, );
  }
}
