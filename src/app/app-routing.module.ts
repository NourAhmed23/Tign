import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './myAdmin/admin-orders./admin-orders..component';
import { AdminProductsComponent } from './myAdmin/admin-products/admin-products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';


const routes: Routes = [

  {path : 'shoping-cart' , component: ShopingCartComponent},

  {path : 'products' , component: ProductsComponent},
  {path : 'orders' , component: MyOrdersComponent},
  {path : 'admin/orders' , component: AdminOrdersComponent},
  {path : 'admin/products' , component: AdminProductsComponent},
  {path : 'log-in' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
