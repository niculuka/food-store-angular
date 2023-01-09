import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';

import { DialogCreateComponent } from './dialogs/dialog-create/dialog-create.component';
import { DialogDeleteProductComponent } from './dialogs/dialog-delete-product/dialog-delete-product.component';
import { DialogUpdateComponent } from './dialogs/dialog-update/dialog-update.component';
import { DialogDeleteOrderComponent } from './dialogs/dialog-delete-order/dialog-delete-order.component';
import { DialogDeleteItemComponent } from './dialogs/dialog-delete-item/dialog-delete-item.component';
import { DialogDeleteUserComponent } from './dialogs/dialog-delete-user/dialog-delete-user.component';
import { DialogDeleteTokenComponent } from './dialogs/dialog-delete-token/dialog-delete-token.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';
import { NavbarComponent } from './guest/navbar/navbar.component';
import { HomeComponent } from './guest/home/home.component';
import { ProductComponent } from './products-pages/product/product.component';
import { CartComponent } from './user/cart/cart.component';
import { CartItemComponent } from './user/cart-item/cart-item.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProductDetailComponent } from './products-pages/product-detail/product-detail.component';
import { NotFoundComponent } from './guest/not-found/not-found.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { OrderComponent } from './user/order/order.component';
import { PaymentFormComponent } from './user/payment-form/payment-form.component';
import { ProductCategoryComponent } from './products-pages/product-category/product-category.component';
import { OrderDetailComponent } from './user/order-detail/order-detail.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderAgreementComponent } from './user/order-agreement/order-agreement.component';
import { FooterComponent } from './guest/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminItemComponent,
    AdminTokenComponent,
    AdminProductComponent,
    AdminUserComponent,
    AdminOrderComponent,
    DialogCreateComponent,
    DialogDeleteProductComponent,
    DialogUpdateComponent,
    DialogDeleteOrderComponent,
    DialogDeleteItemComponent,
    DialogDeleteUserComponent,
    DialogDeleteTokenComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    CartItemComponent,
    ProfileComponent,    
    ProductDetailComponent,
    NotFoundComponent,
    UnauthComponent,
    OrderComponent,    
    PaymentFormComponent,
    ProductCategoryComponent,    
    OrderDetailComponent,
    MyOrderComponent,        
    OrderAgreementComponent,
    FooterComponent,
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
