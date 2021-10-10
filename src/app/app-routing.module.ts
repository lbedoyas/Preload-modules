import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadService } from './core/services/preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
    data: { preload: true }
  },
  {
    path: 'about',
    loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
