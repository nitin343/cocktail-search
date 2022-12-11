import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class PublicService {

  constructor(private http: HttpClient) { }

  cocktailDb(): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
  }
  getCocktailByName(Name:any): Observable<any> {
    const params = new HttpParams().set("s", Name);
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php`,{params});
  }
}
