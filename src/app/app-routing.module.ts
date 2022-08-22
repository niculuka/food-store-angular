import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UnauthComponent } from './unauth/unauth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { Role } from './model/role.enum';
import { OrderComponent } from './order/order.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminTokenComponent } from './admin-token/admin-token.component';

const routes: Routes = [
  // home
  { path: "home", component: HomeComponent },
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
  { path: "profile", component: UserComponent, canActivate: [AuthGuard], data: { roles: [Role.ADMIN, Role.USER] } },
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
