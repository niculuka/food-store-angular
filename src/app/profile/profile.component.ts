import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from '../service/user.service';

const bcrypt = require("bcryptjs");   // add this:  -  "browser": {"crypto": false} -  in package.json 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User();
  user: User = new User();

  errorMessage: string = ""
  repeatPassword: string = "";

  match: boolean = false;
  password: boolean = false;
  profile: boolean = false;
  remove: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
      this.user.userId = data.userId;
    })
  }

  ngOnInit(): void {
  }

  differentPassword() {
    return this.currentUser.newPassword === this.currentUser.oldPassword;
  }

  confirmPassword() {
    return this.currentUser.newPassword !== this.repeatPassword;
  }

  editPassword() {
    this.password = !this.password;
    this.profile = false;
    this.remove = false;
  }

  editProfile() {
    this.profile = !this.profile;
    this.password = false;
    this.remove = false;
  }

  removeAccount() {
    this.remove = !this.remove;
    this.profile = false;
    this.password = false;
  }

  updatePassword() {
    if (this.differentPassword() || this.confirmPassword()) return;
    this.userService.updatePasswordService(this.currentUser).subscribe({
      next: () => {
        this.authService.logoutService();
        this.router.navigate(['auth/login']);
        this.toastrService.info("Password updated!");
      },
      error: err => {
        this.toastrService.warning("Wrong password", "Password not updated!")
        console.log(err);
      }
    })
  }  

  updateProfile() {
    bcrypt.compare(this.currentUser.oldPassword, this.currentUser.password, (err: any, isMatch: any) => {
      if (err) { console.log(err); return; }
      if (!isMatch) { this.match = true; return; }

      this.userService.updateProfileService(this.currentUser).subscribe({
        next: () => {
          this.authService.logoutService();
          this.router.navigate(['auth/login']);
          this.toastrService.info("User updated!");
        },
        error: err => {
          this.toastrService.warning("Could not update the profile!", this.currentUser.username)
          console.log(err);
        }
      })
    })
  }

  deleteAccount(user: User) {
    if (this.currentUser.userId !== user.userId) return;

    bcrypt.compare(this.currentUser.oldPassword, this.currentUser.password, (err: any, isMatch: any) => {
      if (err) { console.log(err); return; }
      if (!isMatch) { this.match = true; return; }

      this.user.oldPassword = this.currentUser.oldPassword;
      this.userService.deleteUserProfileService(user).subscribe({
        next: () => {
          this.authService.logoutService();
          this.router.navigate(["products"]);
          this.toastrService.info("Account deleted!");
        },
        error: err => {
          this.errorMessage = "Could not delete this account!";
          this.toastrService.warning("Could not delete this account!")
          console.log(err);
        }
      })
    })
  }

}
