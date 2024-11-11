import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public username!: string;
  public email!: string;
  public password!: string;
  public confirmPassword!: string;
  public acceptTerms!: boolean;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}
  ngOnInit(): void {}

  async onSignup() {
    if (this.password !== this.confirmPassword) {
      this.showAlert('Passwords do not match');
      return;
    }

    if (!this.username || !this.email || !this.password) {
      this.showAlert('All fields are required');
      return;
    }

    // Proceed with signup (you can add backend API integration here)
    console.log('Signup successful', {
      username: this.username,
      email: this.email,
    });

    // Navigate to the login page after signup
    this.navCtrl.navigateForward('/login');
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
