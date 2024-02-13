import { Component, inject, signal } from '@angular/core';

import { ProductCartComponent } from '../product-cart/product-cart.component';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductCartComponent, RouterLinkWithHref, RouterLinkActive],
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
