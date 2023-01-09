import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  message: string = "";

  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    if (this.authService.currentUserValue?.userId) {
      this.router.navigate(["/profile"])
      return;
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9), Validators.maxLength(13)]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    });
  }

  get fc() {
    //--- doar pentru prescurtarea sintaxei "registerForm.controls.email" -->>> "fc.email"
    return this.registerForm.controls;
  }

  formGroup() {
    this.user.username = this.fc['username'].value;
    this.user.password = this.fc['password'].value;
    this.user.name = this.fc['name'].value;
    this.user.email = this.fc['email'].value;
    this.user.phone = this.fc['phone'].value;
    this.user.address = this.fc['address'].value;
  }

  register() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    this.formGroup();

    this.authService.registerService(this.user).subscribe({
      next: () => {
        this.router.navigate(["auth/login"]);
        this.toastrService.success('Confirm your account!', 'Go to your EMAIL!');
      },
      error: err => {
        if (err?.status === 409) {
          this.toastrService.warning('This username already exists!');
          this.message = 'This username already exists!';
        }
        else {
          this.toastrService.error('Registering Failed');
          this.message = 'Unexpected error!' + err?.message;
        }
      }
    })
  }




  // Register cu si FORM-BUIDER ==============================================================================

  registerDriven() {
    this.authService.registerService(this.user).subscribe({
      next: () => {
        this.router.navigate(["auth/login"]);
        this.toastrService.success('Successful register!');
      },
      error: err => {
        if (err?.status === 409) {
          this.toastrService.warning('This username already exist!');
          this.message = 'This username already exist!';
        }
        else {
          this.toastrService.error('Registering Failed');
          this.message = 'Unexpected error!' + err?.message;
        }
      }
    })
  }
}
