import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.mode';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = signal(false)
  private cartService = inject(CartService)
  cart = this.cartService.cart
  total = this.cartService.total

  toggleShowMenu() {
    this.showMenu.update(prevState => !prevState)
  }
}
