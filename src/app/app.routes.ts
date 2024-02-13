import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      }
    ]
  },
  {
        path: '**',
        loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
      }
];
