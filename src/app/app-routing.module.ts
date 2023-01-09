import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user/cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductDetailComponent } from './products-pages/product-detail/product-detail.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { NotFoundComponent } from './guest/not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { Role } from './shared/enums/food.enum';
import { OrderComponent } from './user/order/order.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { HomeComponent } from './guest/home/home.component';
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';
import { ProductCategoryComponent } from './products-pages/product-category/product-category.component';
import { ProductComponent } from './products-pages/product/product.component';

const routes: Routes = [
  // home
  { path: "home", component: HomeComponent },
  // { path: "**", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "auth/register", component: RegisterComponent },
  { path: "auth/login", component: LoginComponent },

  // menu
  { path: "products", component: ProductCategoryComponent },
  { path: "products/:product", component: ProductComponent },
  { path: "product/:linkName", component:  ProductDetailComponent },
  
  
  // admin
  { path: "admin/products", component: AdminProductComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
  { path: "admin/orders", component: AdminOrderComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },  
  { path: "admin/items", component: AdminItemComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
  { path: "admin/users", component: AdminUserComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
  { path: "admin/tokens", component: AdminTokenComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },
  
  
  // current user
  { path: "cart", component: CartComponent },
  { path: "cart/order", component: OrderComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.USER] } },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.USER] } },
  { path: "my-orders", component: MyOrderComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.USER] } },


  // error
  { path: "401", component: UnauthComponent },
  { path: "404", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
