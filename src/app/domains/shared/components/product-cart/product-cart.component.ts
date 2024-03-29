import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.mode'
;

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input({ required: true }) products: Product[] = []
}
