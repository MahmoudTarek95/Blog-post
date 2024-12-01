import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }

  getAllBlogPosts(page:number, per_page = 6): Observable<Blog[]>{
    return this.http.get<Blog[]>(`https://dev.to/api/articles?page=${page}&per_page=${per_page}`)
  }
  getBlogById(id:number): Observable<Blog>{
    return this.http.get<Blog>('https://dev.to/api/articles/' + id)
  }
}
