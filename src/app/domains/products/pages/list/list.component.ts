import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Category, Product } from '@shared/models/product.mode';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  currentCategory = signal<string>('all')

  @Input() category_id?: string | undefined;

  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        throw new Error(error)
      },
    });
  }
  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        throw new Error(error)
      },
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const category = this.categories().find(category => category.id === parseInt(changes['category_id'].currentValue))
    if (category) {
      this.currentCategory.set(category.name)
    }
    this.getProducts();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
