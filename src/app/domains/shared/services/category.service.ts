import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/product.mode';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)

  constructor() { }

  getAll() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
}
}
