import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public email!: string;
  public password!: string;
  public acceptTerms!: boolean;

  onLogin() {
    if (this.email && this.password && this.acceptTerms) {
      this.router.navigate(['/dashboard']);
    }
    console.log('Logged in with:', this.email);
  }
}
