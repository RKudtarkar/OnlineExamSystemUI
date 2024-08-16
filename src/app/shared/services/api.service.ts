import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICategory } from '../../core/models/CategoryModel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://localhost:7192/api/";
  userStatus: Subject<string> = new Subject();
  constructor(private http: HttpClient//, private jwt: JwtHelperService

  ) { }


  // getCategory() {
  //   return this.http.post(this.baseUrl + "Category/Get", { responseType: "text" });
  // }

  getBooks() {
    return this.http.get<ICategory[]>(this.baseUrl + "Category/GetBooks/")
    //return this.http.post<ICategory[]>(this.baseUrl + 'Category/GetBooks','', { responseType: "text" });
  }

  InsertCategory(category: ICategory ) {

    return this.http.post(this.baseUrl + "AddCategory", category, { responseType: "text" })
  }
  
}