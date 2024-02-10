import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.mode'
import { CommonModule } from '@angular/common';;

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input({ required: true }) products: Product[] = []
}
