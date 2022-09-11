import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { UserComponent } from './user/user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthComponent } from './unauth/unauth.component';
import { OrderComponent } from './order/order.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminTokenComponent } from './admin-token/admin-token.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';
import { DialogDeleteProductComponent } from './dialog-delete-product/dialog-delete-product.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { DialogDeleteOrderComponent } from './dialog-delete-order/dialog-delete-order.component';
import { DialogDeleteItemComponent } from './dialog-delete-item/dialog-delete-item.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { DialogDeleteTokenComponent } from './dialog-delete-token/dialog-delete-token.component';
import { OrderAgreementComponent } from './order-agreement/order-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    CartItemComponent,
    UserComponent,
    AdminProductComponent,
    ProductDetailComponent,
    NotFoundComponent,
    UnauthComponent,
    OrderComponent,
    AdminUserComponent,
    PaymentFormComponent,
    ProductCategoryComponent,
    AdminOrderComponent,
    OrderDetailComponent,
    MyOrderComponent,
    AdminItemComponent,
    AdminTokenComponent,
    DialogCreateComponent,
    DialogDeleteProductComponent,
    DialogUpdateComponent,
    DialogDeleteOrderComponent,
    DialogDeleteItemComponent,
    DialogDeleteUserComponent,
    DialogDeleteTokenComponent,
    OrderAgreementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    }),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
