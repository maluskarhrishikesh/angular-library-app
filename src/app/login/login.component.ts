import { Component, OnInit } from '@angular/core';
import { AppUser } from '../model/app-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails = {};
  appUser: AppUser;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save(loginDetails) {
    if (loginDetails.userName == 'user' && loginDetails.keyPhrase == 'user') {
      localStorage.setItem("name", "Hrishikesh");
      localStorage.setItem("email", "qwerty@yahoo.com");
      localStorage.setItem("isAdmin", "false");
      this.router.navigate(['/home']);
    }
    else if (loginDetails.userName == 'admin' && loginDetails.keyPhrase == 'admin') {
      localStorage.setItem("name", "Admin User");
      localStorage.setItem("email", "asdf@gmail.com");
      localStorage.setItem("isAdmin", "true");
      this.router.navigate(['/home']);
    }
    else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("isAdmin");
      this.router.navigate(['/login']);
    }
  }
}
