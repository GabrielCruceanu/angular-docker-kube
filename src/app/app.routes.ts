import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'category',
    loadComponent: () =>
      import('./category/category.component').then((c) => c.CategoryComponent),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./product/product.component').then((c) => c.ProductComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
