import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path:'lazy',
    loadComponent: ()=> import('./new/new.component').then(m=>m.NewComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
   {
    preloadingStrategy: PreloadAllModules
   }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

